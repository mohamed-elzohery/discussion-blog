import { signin, signout } from "@/actions";
import { auth } from "@/auth";
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function Header() {
  const session = await auth();
  const isSignedin = session?.user;
  let authContent: React.ReactNode;

  if (isSignedin)
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user?.image || ""} />
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

  return (
    <header>
      <Navbar className="mb-6 shadow-md">
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" className="font-bold">
              Discuss
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <Input />
        </NavbarContent>

        <NavbarContent justify="end">{authContent}</NavbarContent>
      </Navbar>
    </header>
  );
}

export default Header;
