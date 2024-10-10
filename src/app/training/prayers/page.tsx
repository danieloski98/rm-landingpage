import BlogData from "@/components/shared/blogData";
import Enrollcomponent from "@/components/shared/enrollcomponent";
import Homelayout from "@/components/shared/homelayout";
import PrayerCard from "@/components/shared/prayerCard";
import React from "react";

export default function Prayers() {
  return (
    <div className=" w-full px-0 lg:px-[50px]">
      <Homelayout first={true} redbgHeight="h-[107px]" showRbtc>
        <div className=" w-full text-primary px-4 lg:px-[116px] z-10 relative py-[10px] ">
          <h1 className=" text-[64px] leading-[80px] font-bold ">
            MENA Prayer Meetings
          </h1>
          <p className=" text-secondary01 leading-6 mt-10 ">
            Join the MENA Prayer Meeting
          </p>
          <p className="text-sm mt-4">
            {` Topic: RHEMA MENA's Zoom Prayer Meeting`}
          </p>
          <p className="text-sm mt-2">
            Time:{" "}
            <span className="underline">Every Tuesday 09:30AM Beirut time</span>{" "}
          </p>
          <p className="mt-2">
            Join Zoom Meeting:{" "}
            <a
              href="https://us02web.zoom.us/j/88666865695?pwd=czh2SDZxRUZDN2RzWUFUQ09pN0sxUT09"
              className="underline text-blue-400"
            >
              https://us02web.zoom.us/j/88666865695?pwd=czh2SDZxRUZDN2RzWUFUQ09pN0sxUT09
            </a>
          </p>
          <div className=" pt-10 px-10 mt-10 ">
            <PrayerCard />
          </div>

          <div className="my-10">
            <p className="font-semibold text-lg underline">
              Sign up for these prayers{" "}
            </p>
            <p>
              Please send an email to{" "}
              <span className="text-blue-400 underline text-">
                <a href="mailto:datasupport@rhemaconnect.com">
                  datasupport@rhemaconnect.com
                </a>{" "}
              </span>{" "}
              and we would send you a form to fill.
            </p>
          </div>
        </div>
      </Homelayout>

      <Enrollcomponent />
    </div>
  );
}
