"use client";

import { signin, signout } from "@/actions";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Session } from "inspector";
import { useSession } from "next-auth/react";

export function AuthHeaderContent() {
  const session = useSession();
  const isSignedin = !!session?.data?.user;
  const isAuthStatusLoading = session.status === "loading";
  let authContent: React.ReactNode;
  if (isAuthStatusLoading) return null;
  if (isSignedin)
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent className="p-4">
          <form action={signout}>
            <Button color="primary" type="submit">
              Sign out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  else
    authContent = (
      <>
        <NavbarItem>
          <form action={signin}>
            <Button color="secondary" variant="bordered" type="submit">
              Sign in
            </Button>
          </form>
        </NavbarItem>
      </>
    );

  return authContent;
}
