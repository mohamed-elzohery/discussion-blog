import React from "react";

interface TopicPageProps {
  params: {
    slug: string;
  };
}

function TopicPage({ params }: TopicPageProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="grid-cols-3">
        <h1 className="text-2xl mb-2 font-bold">{params.slug}</h1>
      </div>
    </div>
  );
}

export default TopicPage;
