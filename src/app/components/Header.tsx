import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AuthHeaderContent } from "./auth-header";

async function Header() {
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
        <NavbarContent justify="end">
          <AuthHeaderContent />
        </NavbarContent>
      </Navbar>
    </header>
  );
}

export default Header;
