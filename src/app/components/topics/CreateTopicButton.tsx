import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import CreateTopicForm from "./create-topic";

function CreateTopicButton() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <CreateTopicForm />
      </PopoverContent>
    </Popover>
  );
}

export default CreateTopicButton;
