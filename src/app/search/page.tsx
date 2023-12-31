import { redirect } from "next/navigation";
import React from "react";
import PostList from "../components/posts/post-list";
import { searchPostsByTerm } from "@/db/queries/posts";

interface HasSearchParams {
  searchParams: {
    term: string;
  };
}

function page({ searchParams }: HasSearchParams) {
  const term = searchParams.term;
  if (!term) redirect("/");

  return (
    <div>
      <PostList fetchPosts={() => searchPostsByTerm(term)} />
    </div>
  );
}

export default page;
