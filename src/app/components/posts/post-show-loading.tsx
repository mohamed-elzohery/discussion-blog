import { Skeleton } from "@nextui-org/react";

function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2 mb-4">
        <Skeleton className="h-8 w-1/2 rounded-md" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  );
}

export default PostShowLoading;
