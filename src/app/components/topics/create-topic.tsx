import { createTopic } from "@/actions";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

function CreateTopicForm() {
  return (
    <form action={createTopic}>
      <div className="flex flex-col p-4 gap-4 w-80">
        <h3 className="text-lg">Create a Topic</h3>
        <Input
          name="name"
          label="Name"
          placeholder="Name"
          labelPlacement="outside"
        />
        <Textarea
          name="description"
          label="Description"
          placeholder="Description"
          labelPlacement="outside"
        />
        <Button type="submit">Add Topic</Button>
      </div>
    </form>
  );
}

export default CreateTopicForm;
