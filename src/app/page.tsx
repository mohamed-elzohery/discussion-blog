import { Divider } from "@nextui-org/react";
import CreateTopicButton from "./components/topics/CreateTopicButton";
import TopicList from "./components/topics/TopicList";
import PostList from "./components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";

export default async function Home() {
  return (
    <main className="grid grid-cols-4 gap-8 p-4">
      <section className="col-span-3">
        <h2 className="my-2 mb-4 text-xl font-bold">Top Posts</h2>
        <PostList fetchPosts={fetchTopPosts} />
      </section>
      <section className="shadow-md p-4 border">
        <CreateTopicButton />
        <Divider className="my-2" />
        <h2 className="text-lg mb-3">Topics</h2>
        <TopicList />
      </section>
    </main>
  );
}
