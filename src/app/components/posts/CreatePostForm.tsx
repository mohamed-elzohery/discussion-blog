"use client";
import { createPost } from "@/actions";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../Buttons/SubmitButton";
import { useParams, usePathname } from "next/navigation";

interface CreatePostFormProps {
  slug: string;
}
function CreatePostForm({ slug }: CreatePostFormProps) {
  const [state, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });
  return (
    <form action={action}>
      <div className="flex flex-col p-4 gap-4 w-80">
        <h3 className="text-lg">Create a Topic</h3>
        <Input
          name="title"
          label="Title"
          placeholder="title"
          labelPlacement="outside"
          errorMessage={state.errors.title?.join(", ")}
          isInvalid={!!state.errors.title}
        />
        <Textarea
          name="content"
          label="Content"
          placeholder="Content"
          labelPlacement="outside"
          errorMessage={state.errors.content?.join(", ")}
          isInvalid={!!state.errors.content}
        />
        {state.errors._form ? (
          <p className="p-2 bg-red-400 rounded border text-white">
            {state.errors._form.join(", ")}
          </p>
        ) : null}
        <SubmitButton>Add Post</SubmitButton>
      </div>
    </form>
  );
}

export default CreatePostForm;
