import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React, { Suspense } from "react";
import { AuthHeaderContent } from "./auth-header";
import SearchInput from "./SearchInput";

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
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarContent>
        <NavbarContent justify="end">
          <AuthHeaderContent />
        </NavbarContent>
      </Navbar>
    </header>
  );
}

export default Header;
