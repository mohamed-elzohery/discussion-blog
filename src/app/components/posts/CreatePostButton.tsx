import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import CreatePostForm from "./CreatePostForm";
import { TopicPageProps } from "@/app/topics/[slug]/page";

function CreatePostButton({ slug }: { slug: string }) {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <CreatePostForm slug={slug} />
      </PopoverContent>
    </Popover>
  );
}

export default CreatePostButton;
