"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreateSchemaFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export const createPost = async (
  slug: string,
  formState: CreateSchemaFormState,
  formData: FormData
): Promise<CreateSchemaFormState> => {
  const session = await auth();

  if (!session?.user) return { errors: { _form: ["you must be sign in"] } };

  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: {
        title: result.error.flatten().fieldErrors.title,
        content: result.error.flatten().fieldErrors.content,
      },
    };
  }

  let postId;
  try {
    const topic = await db.topic.findFirst({ where: { slug } });
    if (!topic) throw new Error("cannot find topic.");
    const post = await db.post.create({
      data: {
        topicId: topic.id,
        content: result.data.content,
        title: result.data.title,
        userId: session.user.id,
      },
    });
    postId = post.id;
  } catch (error: unknown) {
    if (error instanceof Error) return { errors: { _form: [error.message] } };
    else return { errors: { _form: ["Something went wrong"] } };
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, postId));
};

createPost;
