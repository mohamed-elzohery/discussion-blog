import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/app/components/posts/post-show";
import CommentCreateForm from "@/app/components/comments/comment-create-form";
import CommentList from "@/app/components/comments/comment-list";
import { fetchCommentsByPostID } from "@/db/queries/comments";
import { Suspense } from "react";
import PostShowLoading from "@/app/components/posts/post-show-loading";

interface PostShowPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, id } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={id} />
      </Suspense>
      <CommentCreateForm postId={id} startOpen />
      <CommentList fetchComments={() => fetchCommentsByPostID(id)} />
    </div>
  );
}
