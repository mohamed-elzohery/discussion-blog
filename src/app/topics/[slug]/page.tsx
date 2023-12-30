import CreatePostButton from "@/app/components/posts/CreatePostButton";
import CreatePostForm from "@/app/components/posts/CreatePostForm";
import PostList from "@/app/components/posts/post-list";
import { fetchPostsBySlug } from "@/db/queries/posts";
import React from "react";

export interface TopicPageProps {
  params: {
    slug: string;
  };
}

function TopicPage({ params }: TopicPageProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl mb-2 font-bold">{params.slug}</h1>
        <PostList fetchPosts={() => fetchPostsBySlug(params.slug)} />
      </div>
      <div>
        <CreatePostButton slug={params.slug} />
      </div>
    </div>
  );
}

export default TopicPage;
