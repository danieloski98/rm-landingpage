import React from "react";

export default function Newsletter() {
  return (
    <div className=" flex flex-col gap-1 relative z-10 text-secondary01 ">
      <h6 className=" font-bold text-lg leading-[28px] ">
        Stay updated with our newsletter
      </h6>
      <p className=" text-sm leading-[22px] text-secondary02 ">Contact us</p>
      <div className=" flex gap-2 mt-3 ">
        <input
          placeholder="Your email address"
          className=" w-full lg:w-[267px] h-[48px] border bg-dark01  border-[#919EAB52] outline-none rounded-lg px-4 bg-transparent text-sm leading-[22px] "
        />
        <button className=" text-sm font-bold leading-[22px] text-secondary05  border-primary bg-primary h-[48px] px-4 rounded-[8px] ">
          Join
        </button>
      </div>
    </div>
  );
}
