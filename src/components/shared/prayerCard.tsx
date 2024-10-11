import Image from "next/image";
import React from "react";

interface IProps {
  limit?: boolean;
}

export default function PrayerCard({ limit }: IProps) {
  const LocationCard = ({ title = "Algeria" }: { title?: string }) => {
    return (
      <div className=" flex gap-4 ">
        <Image src={"/images/pray.png"} width={82} height={82} alt="pray" />
        <div className=" mt-auto ">
          <p className=" text-xs leading-[18px] ">Pray for</p>
          <p className="  leading-7 font-semibold ">{title ?? "Algeria"}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {limit && (
        <div className=" w-fit flex lg:flex-row flex-col mt-8 lg:justify-between gap-12 lg:items-center ">
          <div className=" w-fit flex flex-col gap-6  ">
            <LocationCard title="Algeria" />
            <LocationCard title="Algeria" />
          </div>
          <div className=" w-[1px] h-[160px] lg:block hidden bg-secondary04 " />
          <div className=" w-fit flex flex-col gap-6  ">
            <LocationCard title="Lebanon" />
            <LocationCard title="lebanon" />
          </div>
          <div className=" w-[1px] h-[160px] lg:block hidden bg-secondary04 " />
          <div className=" w-fit lg:flex hidden flex-col  gap-6  ">
            <LocationCard title="Chad" />
            <LocationCard title="Chad" />
          </div>
          <div className=" w-[1px] h-[160px] lg:block hidden bg-secondary04 " />
          <div className=" w-fit lg:flex hidden flex-col  gap-6  ">
            <LocationCard title="Chad" />
            <LocationCard title="Chad" />
          </div>
        </div>
      )}
      {!limit && (
        <div className=" w-fit flex lg:flex-row flex-col lg:justify-between gap-12 relative ">
          <div className=" w-[537px] h-[182px] rounded-2xl bg-secondary10 z-0 absolute -top-8 -left-10 " />
          <div className=" w-fit flex relative flex-col gap-6  ">
            <LocationCard title="Mali" />
            <LocationCard title="Lebanon" />
            <LocationCard />
            {/* <LocationCard />
            <LocationCard /> */}
          </div>
          {/* <div className=" w-[1px] h-[160px] lg:block hidden relative bg-secondary04 " />
          <div className=" w-fit flex relative flex-col gap-6  ">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
          <div className=" w-[1px] h-[160px] lg:block hidden relative bg-secondary04 " />
          <div className=" w-fit flex relative flex-col gap-6  ">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
          <div className=" w-[1px] h-[160px] lg:block hidden relative bg-secondary04 " />
          <div className=" w-fit flex relative flex-col gap-6  ">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div> */}
        </div>
      )}
    </>
  );
}
