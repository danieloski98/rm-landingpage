import { Copy, Facebook } from "iconsax-react";
import NewPostCard from "./Postcard";
import { BLOG_DATA, IBlogData } from "@/common/BlogData";

export default function ContentSection({ item }: { item: IBlogData }) {
  const lastestPosts = BLOG_DATA.slice(0, 3);
  return (
    <div className="w-full flex flex-col items-center pb-12">
      <div className="sm:w-[90%] lg:w-[60%] h-full">
        <p className="mt-6 font-normal text-md text-[#475467]">
          {item?.description}
        </p>

        {/* <div className="w-full h-[100px] flex items-center justify-between mt-8 border-t-2 border-t-gray-300 pt-5">
          <p className="text-[18px] text-gray-800 font-semibold">
            Share this post
          </p>

          <div className="flex ">
            <div className="border-2 rounded-lg cursor-pointer p-2 flex justify-center items-center h-16">
              <Copy variant="Outline" size={"30px"} color="grey" />
              <p className="text-gray-800 ml-3">Copy link</p>
            </div>

            <div className="w-16 h-16 border-2 rounded-lg flex justify-center items-center ml-4">
              <Facebook variant="Bold" size={"30px"} color="grey" />
            </div>

            
          </div>
        </div> */}
      </div>

      <div className="w-full px-6 flex sm:flex-col lg:flex-row justify-between mt-12">
        <div>
          <p className="text-[16px] font-semibold text-[#BE0027]">Our blog</p>
          <h1 className="font-bold text-[34px] mt-4 text-gray-600">
            Latest blog posts
          </h1>
          <p className="text-[20px] font-normal text-gray-500 mt-6">
            Tool and strategies young Christians need to develop in the image of
            God
          </p>
        </div>
        <button className="sm:hidden lg:block w-[148px] h-[48px] bg-[#BE0027] text-white rounded-lg">
          View all posts
        </button>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-1 lg:gap-8 sm:px-3 lg:px-10 mt-12">
        {lastestPosts.map((item, index) => (
          <NewPostCard item={item} key={index.toString()} index={index} />
        ))}

        <button className="sm:block lg:hidden w-full mt-6 h-[48px] bg-[#BE0027] text-white rounded-lg">
          View all posts
        </button>
      </div>
    </div>
  );
}
