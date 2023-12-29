import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function TopicList() {
  const topics = await db.topic.findMany();
  console.log(topics);
  const renderedTopics = topics.map(({ id, slug }) => (
    <Chip key={id} color="danger" className="text-white">
      <Link href={paths.topicShow(slug)}>{slug}</Link>
    </Chip>
  ));
  return <div className="flex flex-wrap gap-2">{renderedTopics}</div>;
}

export default TopicList;
