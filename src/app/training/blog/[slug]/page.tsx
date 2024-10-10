"use client";
import React from "react";
import ContentSection from "@/components/blog/singlepage/Content";
import ContentHeader from "@/components/blog/singlepage/ContentHeader";
import { BLOG_DATA, IBlogData } from "@/common/BlogData";

export default function PostPage({ params }: { params: { slug: string } }) {
  const [data, setData] = React.useState<IBlogData | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { slug } = params;

  React.useEffect(() => {
    setData(BLOG_DATA.filter((_, indx) => indx === parseInt(slug))[0]);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <p className="text-center text-2xl mt-[50px]">Loading Post</p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-white">
      {/* BANNER SECTION */}
      <ContentHeader item={data as IBlogData} />

      <ContentSection item={data as IBlogData} />
    </div>
  );
}
