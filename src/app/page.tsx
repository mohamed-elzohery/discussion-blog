import { signin, signout } from "@/actions";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import Profile from "./components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <form action={signout}>
          <Button type="submit">Sign out</Button>
          <p>{JSON.stringify(session.user)}</p>
        </form>
      ) : (
        <form action={signin}>
          <Button type="submit">Sign in</Button>
        </form>
      )}
      <Profile />
    </div>
  );
}
