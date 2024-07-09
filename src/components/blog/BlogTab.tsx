import { SearchNormal } from "iconsax-react";
import React from "react";
import CustomInput from "../shared/customInput";

const tabItems = ["Articles", "Videos", "News", "Conferences & Events"];

interface IProps {
  onClick: (item: string) => void;
  value: string;
}

export default function BlogTab({ onClick, value }: IProps) {
  return (
    <>

    <div className=" sm:w-full lg:w-[40%] sm:h-[40px] lg:h-[50px] flex lg:pl-16 pt-4 sm:bg-[#212B36] lg:bg-transparent px-3">
      {tabItems.map((item, index) => (
        <div
          key={index.toString()}
          onClick={() => onClick(item)}
          className={`h-full cursor-pointer ${value === item ? "border-b-[4px]" : "border-b-[0px]"
            } border-b-red-700 w-auto mr-6`}
        >
          <p
            className={`sm:text-[14px] lg:text-[16px] text-white whitespace-nowrap ${value === item ? "text-white" : "text-[#637381]"
              }`}
          >
            {item}
          </p>
        </div>
      ))}

   
    </div>

    <div className="w-full pt-3 pb-4 sm:flex lg:hidden sm:bg-[#212B36] px-3">
        <CustomInput leftIcon={<SearchNormal size={'20px'} color="grey" variant="Outline" />} width="100%" height="56px" placeholder="Search" className="w-[100%] h-[56px]" />
      </div>
    </>
  );
}