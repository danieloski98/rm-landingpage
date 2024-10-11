import { BLOG_DATA, IBlogData } from "@/common/BlogData";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogData() {
  const items = BLOG_DATA.slice(0, 3);

  const BlogCard = ({ item, index }: { item: IBlogData; index: number }) => {
    const navigate = useRouter();
    return (
      <div
        className=" w-full flex flex-col gap-6 "
        onClick={() => {
          navigate.push(`/training/blog/${index.toString()}`);
        }}
      >
        <div className=" w-full h-[240px] bg-violet-600 rounded-2xl overflow-hidden">
          <img src={item?.image} alt="image" className="w-full h-full" />
        </div>
        <div className=" w-full flex flex-col gap-2 ">
          <p className=" text-sm leading-[22px] text-primary01 font-medium ">
            Articles
          </p>
          <p className=" text-xl leading-[28px] font-semibold ">{item.title}</p>
          <p className=" leading-6 ">
            {item.description.substring(0, 300) + "..."}
          </p>
        </div>
        <div className=" flex items-center gap-3 ">
          <div className=" ">
            <p className=" font-semibold text-sm leading-5 ">{item.author}</p>
            {/* <p className=' text-sm leading-5 ' >20 Jan 2024</p> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" relative w-full flex lg:flex-row flex-col gap-4 mt-8  ">
      {items.map((item, index) => (
        <BlogCard item={item} key={index.toString()} index={index} />
      ))}
    </div>
  );
}
