"use client";
import { IBlogData } from "@/common/BlogData";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { useRouter } from "next/navigation";
export default function PostCard({
  item,
  index,
}: {
  item: IBlogData;
  index: number;
}) {
  const router = useRouter();
  const navigate = (url: string) => {
    // router.push(`/training/blog/${index.toString()}`);
    router?.push(url)
  };
  return (
    <div
      onClick={()=> navigate(item?.link)}
      className="w-full sm:h-auto lg:h-fit flex sm:flex-col lg:flex-row items-center mb-10 cursor-pointer"
    >
      <div className=" w-fit " >
        <div className="sm:w-[100%] lg:w-[320px] h-[200px] bg-gray-500 rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt="image"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col sm:ml-0 lg:ml-4 sm:mt-4 lg:mt-0">
        <p className=" text-red-500 text-[14px] font-bold">Article</p>
        <h3 className="font-semibold text-[18px] text-white sm:w-full lg:w-[60%]">
          {item?.title}
        </h3>
        <p className=" font-normal text-[16px] text-[#F4F4F4] mt-2 sm:w-full lg:w-[60%]">
          {item?.description.substring(0, 300) + "..."}
        </p>

        <div className="flex items-center mt-2 ">
          <div className="">
            <p className="font-semibold text-[16px] text-[whitesmoke]">
              {item?.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
