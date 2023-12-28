import { signin, signout } from "@/actions";
import { auth } from "@/auth";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Profile from "./components/Profile";
import CreateTopicForm from "./components/topics/create-topic";

export default async function Home() {
  return (
    <main className="grid grid-cols-4 grid-gap-4 p-4">
      <section className="col-span-3">Home page</section>
      <section>
        <Popover placement="left">
          <PopoverTrigger>
            <Button color="primary">Create Topic</Button>
          </PopoverTrigger>
          <PopoverContent>
            <CreateTopicForm />
          </PopoverContent>
        </Popover>
      </section>
    </main>
  );
}
