"use client";
import { searchPosts } from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";

function SearchInput() {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  return (
    <form action={searchPosts}>
      <Input defaultValue={term || ""} name="term" />
    </form>
  );
}

export default SearchInput;
