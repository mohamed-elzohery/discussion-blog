import { Divider } from "@nextui-org/react";
import CreateTopicButton from "./components/topics/CreateTopicButton";
import TopicList from "./components/topics/TopicList";

export default async function Home() {
  return (
    <main className="grid grid-cols-4 grid-gap-4 p-4">
      <section className="col-span-3">Home page</section>
      <section className="shadow-md p-4 border">
        <CreateTopicButton />
        <Divider className="my-2" />
        <h2 className="text-lg mb-3">Topics</h2>
        <TopicList />
      </section>
    </main>
  );
}
