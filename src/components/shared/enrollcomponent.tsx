import React from "react";
import Newsletter from "./newsletter";

export default function Enrollcomponent({
  shownewletter,
}: {
  shownewletter?: boolean;
}) {
  return (
    <div className=" w-full lg:px-[116px] py-12 flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between ">
      <div className=" flex flex-col ">
        <h3 className=" text-[32px] leading-[48px] font-bold ">
          Get Enrolled Today!
        </h3>
        <p className=" leading-6 max-w-[550px] mt-4 ">{`RHEMA is a Bible school that helps you know God’s Word. When you Know God’s Words you will grow in your faith and apply it to your life.`}</p> 
        <a href="https://www.dev.rhemamena.com/register" className="w-full lg:w-[137px] h-[48px] flex justify-center items-center rounded-[8px] bg-[#BE0027] text-white text-[15px] font-semibold mt-8">
          APPLY NOW!
        </a>
      </div>
      {shownewletter && <Newsletter />}
    </div>
  );
}
