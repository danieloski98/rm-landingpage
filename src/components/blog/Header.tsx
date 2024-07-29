import { SearchNormal } from "iconsax-react";
import CustomInput from "../shared/customInput";

export default function BlogHeader() {
  return (
    <>
      <div className="w-full h-[200px] sm:hidden lg:flex justify-between items-center">
        <div className="pl-16">
          <div className="w-[534px] h-[107px] bg-red-700 rounded-[16px] flex justify-center items-center">
            <h1 className="text-[64px] font-bold text-white">Blog & Media</h1>
          </div>
          <p className="text-center text-[16px] color-white mt-3">
            Learn more about what we have done over the years
          </p>
        </div>

        {/* <div className=" flex-[0.4] flex items-end">
          <CustomInput
            leftIcon={
              <SearchNormal size={"20px"} color="grey" variant="Outline" />
            }
            label="Search"
            placeholder="Search"
            className="w-[437px] h-[56px]"
          />
        </div> */}
      </div>

      <div className="w-full h-auto sm:flex flex-col lg:hidden bg-[#212B36] px-3">
        <div className="z-[1000]">
          <h1 className="text-[34px] font-bold text-white">Blog & Media</h1>
          <p className="text-left text-[14px] color-white mt-3">
            Learn more about what we have done over the years
          </p>
        </div>
      </div>
    </>
  );
}
