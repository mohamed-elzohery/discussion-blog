"use client";
import { createTopic } from "@/actions";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../Buttons/SubmitButton";

function CreateTopicForm() {
  const [state, action] = useFormState(createTopic, { errors: {} });
  return (
    <form action={action}>
      <div className="flex flex-col p-4 gap-4 w-80">
        <h3 className="text-lg">Create a Topic</h3>
        <Input
          name="name"
          label="Name"
          placeholder="Name"
          labelPlacement="outside"
          errorMessage={state.errors.name?.join(", ")}
          isInvalid={!!state.errors.name}
        />
        <Textarea
          name="description"
          label="Description"
          placeholder="Description"
          labelPlacement="outside"
          errorMessage={state.errors.description?.join(", ")}
          isInvalid={!!state.errors.description}
        />
        {state.errors._form ? (
          <p className="p-2 bg-red-400 rounded border text-white">
            {state.errors._form.join(", ")}
          </p>
        ) : null}
        <SubmitButton>Add Topic</SubmitButton>
      </div>
    </form>
  );
}

export default CreateTopicForm;
