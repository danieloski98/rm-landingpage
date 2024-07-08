import React from "react";

const tabItems = ["Articles", "Videos", "News", "Conferences & Events"];

interface IProps {
  onClick: (item: string) => void;
  value: string;
}

export default function BlogTab({ onClick, value }: IProps) {
  return (
    <div className=" sm:w-full lg:w-[30%] h-[30px] flex lg:pl-16 mt-6">
      {tabItems.map((item, index) => (
        <div
          key={index.toString()}
          onClick={() => onClick(item)}
          className={`h-full cursor-pointer ${
            value === item ? "border-b-[4px]" : "border-b-[0px]"
          } border-b-red-700 w-auto mr-6`}
        >
          <p
            className={`text-[16px] text-white ${
              value === item ? "text-white" : "text-[#BEBEBE]"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
