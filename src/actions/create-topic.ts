"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "must be lowercase letters with no spaces",
    }),
  description: z.string().min(10),
});

export const createTopic = async (
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> => {
  const session = await auth();

  if (!session?.user) return { errors: { _form: ["you must be sign in"] } };

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: {
        name: result.error.flatten().fieldErrors.name,
        description: result.error.flatten().fieldErrors.description,
      },
    };
  }

  let topicSlug;
  try {
    const topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
    topicSlug = topic.slug;
  } catch (error: unknown) {
    if (error instanceof Error) return { errors: { _form: [error.message] } };
    else return { errors: { _form: ["Something went wrong"] } };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // revalidate homepage
  revalidatePath("/");
  redirect(paths.topicShow(topicSlug));
};
