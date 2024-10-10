"use client";
import { FaqData, IFaq } from "@/common/FaqData";
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FaqContainer = ({ item }: { item: IFaq }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="w-full min-h-[100px] max-h-[400px] overflow-auto border-[1px] border-white rounded-md p-6 mb-8">
      <div
        className="flex w-full justify-between items-center cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <p className="font-semibold text-2xl text-white mt-3">{item?.title}</p>
        {!show && <FiChevronDown color="white" size={25} />}
        {show && <FiChevronUp color="white" size={25} />}
      </div>
      {show && (
        <div className="mt-6 border-t-[1px] border-t-white pt-5">
          <p>{item?.desription}</p>
        </div>
      )}
    </div>
  );
};

function FaqPage() {
  return (
    <div className="w-full h-screen overflow-auto flex flex-col items-center">
      <div className="xl:w-[50%] sm:w-full">
        <h3 className="text-center font-semibold text-2xl">
          Frequently Asked Questions
        </h3>

        <div className="w-full h-[100px] pt-10">
          {FaqData.map((item, index) => (
            <FaqContainer item={item} key={index.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
