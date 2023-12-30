import { db } from "..";
import { Comment } from "@prisma/client";

export type CommentsWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export async function fetchCommentsByPostID(
  postId: string
): Promise<CommentsWithAuthor[]> {
  return db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}
