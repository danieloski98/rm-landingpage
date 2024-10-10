"use client";
import { IBlogData } from "@/common/BlogData";
/* eslint-disable react/no-unescaped-entities */

import { useRouter } from "next/navigation";
export default function NewPostCard({
  item,
  index,
}: {
  item: IBlogData;
  index: number;
}) {
  const router = useRouter();
  const navigate = () => {
    router.push(`/training/blog/${index.toString()}`);
  };
  return (
    <div
      onClick={navigate}
      className="w-full h-auto flex flex-col items-center mb-10"
    >
      <div className="w-[100%] h-[400px] bg-gray-500 rounded-lg overflow-hidden">
        <img src={item?.image} alt="img" className="w-full h-full" />
      </div>
      <div className="flex flex-col sm:ml-0 lg:ml-4 sm:mt-4 lg:mt-0">
        <p className=" text-red-500 text-[14px] font-bold my-4">Article</p>
        <h3 className="font-semibold text-[18px] text-gray-600 sm:w-full lg:w-[90%]">
          {item?.title}
        </h3>
        <p className=" font-normal text-[16px] text-[#828282] mt-2 sm:w-full lg:w-[90%]">
          {item?.description.substring(0, 200) + "..."}
        </p>

        <div className="flex items-center mt-2 ">
          {/* <div className="w-14 h-14 rounded-full bg-gray-500"></div> */}
          <div className="ml-3">
            <p className="font-semibold text-[16px] text-gray-600">
              {item?.author}
            </p>
            {/* <p className="font-normal text-[16px] text-gray-400">19 Jan 2024</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
