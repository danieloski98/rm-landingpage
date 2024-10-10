import { IBlogData } from "@/common/BlogData";

export default function ContentHeader({ item }: { item: IBlogData }) {
  return (
    <div className="w-full h-[720px] flex lg:flex-row sm:flex-col-reverse sm:mb-10 lg:mb-0">
      <div className="sm:w-full lg:w-[50%] h-full flex flex-col justify-center sm:pl-4 lg:pl-[100px]">
        <p className="font-semibold text-lg text-[#BE0027]"> 10 min read</p>
        <h1 className="font-bold text-[32px] sm:w-[95%] lg:w-[70%] text-[#3B3B3B] mt-4">
          {item?.title}
        </h1>
        <p className="text-[16px] mt-6 font-normal text-[#475467] sm:w-[95%] lg:w-[70%]">
          {item?.description.substring(0, 100) + "..."}
        </p>

        <div className="flex items-center mt-10">
          {/* <div className="w-16 h-16 rounded-full bg-gray-200" /> */}
          <div className="ml-3">
            <p className="text-[#212B36] font-semibold text-md">
              {item?.author}
            </p>
            {/* <p className="text-[#475467] mt-0 text-sm font-normal">Head Pastor</p> */}
          </div>
        </div>
      </div>
      <div className="sm:w-full lg:w-[50%] sm:h-[500px] lg:h-full bg-gray-400">
        <img src={item?.image} alt="img" className="w-full h-[100%]" />
      </div>
    </div>
  );
}
