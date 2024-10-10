import React from "react";
import BlogData from "../shared/blogData";
import Link from "next/link";

export default function Blogpost() {
  const BlogCard = () => {
    return (
      <div className=" w-full flex flex-col gap-6 ">
        <div className=" w-full h-[240px] rounded-2xl ">
          <img
            alt="blog"
            src="/images/blogimg.png"
            className=" w-full h-full object-cover rounded-2xl "
          />
        </div>
        <div className=" w-full flex flex-col gap-2 ">
          <p className=" text-sm leading-[22px] text-primary01 font-medium ">
            Articles
          </p>
          <p className=" text-xl leading-[28px] font-semibold ">
            Bible School Alumni Stories: Impacting the World for Christ
          </p>
          <p className=" leading-6 ">
            Be inspired by the remarkable stories and achievements of our Bible
            school alumni, individuals who have gone on to...
          </p>
        </div>
        <div className=" flex items-center gap-3 ">
          <div className=" bg-blue-800 rounded-full w-10 h-10 "></div>
          <div className=" ">
            <p className=" font-semibold text-sm leading-5 ">Olivia Rhye</p>
            <p className=" text-sm leading-5 ">20 Jan 2024</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" w-full flex justify-center lg:bg-secondary04 lg:px-[166px] py-20 relative text-primary ">
      <div className=" max-w-[1181px] w-full bg-secondary05 lg:p-12 rounded-2xl relative ">
        <div className=" w-[55%] h-[60%] lg:h-[75%] rounded-tl-2xl rounded-br-2xl absolute top-0 left-0 bg-secondary10 " />
        <div className=" w-[569px] h-[266px] bg-opacity-10 bg-primary03 rounded-2xl absolute -bottom-10 right-5 " />
        <div className=" relative z-10 w-full flex gap-4 justify-between items-center ">
          <div>
            <h1 className=" text-2xl leading-9 font-bold ">Blog Post</h1>
            <p className=" text-sm leading-[22px] ">
              Get edified with articles on various topics
            </p>
          </div>
          <div className=" w-fit ">
            <button className=" w-[100px] text-sm leading-[22px] border border-primary h-[38px] px-4 rounded-[32px] ">
              View all
            </button>
          </div>
        </div>
        <BlogData />
      </div>
    </div>
  );
}
