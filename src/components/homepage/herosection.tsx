import Image from "next/image";
import React from "react";
import Homelayout from "../shared/homelayout";
import PrayerCard from "../shared/prayerCard";
import Carousel from "./carousel";

export default function Herosection() {
  return (
    <Homelayout first={true}>
      <div className=" w-[537px] h-[162px] rounded-t-2xl border border-b-0 border-secondary04 absolute bottom-0 right-0 " />
      <div className=" w-full text-primary lg:pl-[116px] z-10 relative py-[115px] ">
        <h1 className=" text-[32px] leading-[48px] lg:text-5xl lg:leading-[64px] font-bold relative ">
          RHEMA MENA IS FOR YOU!
        </h1>
        <p className=" w-full lg:max-w-[551px] mt-4 leading-6 relative z-10 ">
          {`RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
          <br />
          <br />
          {`RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
        </p>
        <div className=" w-full relative pt-12 flex lg:pr-12 ">
          <div className=" w-full lg:w-[537px] h-[158px] lg:h-[182px] bg-secondary04 rounded-2xl absolute -right-[50%] lg:right-0 top-0 " />
          {/* <div className=" w-full  lg:max-h-[646px] relative lg:h-[646px] h-[195px] ">
            <Image
              src={"/images/home/Slider.png"}
              alt="Slider"
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-2xl relative z-10 "
              layout="fill"
              style={{ width: "100%" }}
            />
          </div> */}
          <Carousel />
        </div>
        <div className=" w-full relative mt-6 pt-[40px] lg:pt-[120px] ">
          <div className=" w-[537px] h-[100px] lg:h-[182px] rounded-2xl bg-secondary10 absolute top-0 " />
          <div className=" w-full relative z-10 lg:pl-20 ">
            <h2 className=" text-2xl leading-9 ">MENA Prayer Meetings</h2>
            <p className=" text-sm leading-[22px] ">
              Join the MENA Prayer Meetings
            </p>
            <PrayerCard limit={true} />
            <button className=" text-sm leading-[22px] border border-primary h-[38px] px-4 rounded-[32px] mt-11 ">
              View all
            </button>
          </div>
        </div>
      </div>
    </Homelayout>
  );
}
