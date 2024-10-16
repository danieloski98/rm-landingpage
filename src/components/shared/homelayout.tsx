import Image from "next/image";
import React from "react";

export default function Homelayout({
  children,
  hidemena,
  redbgHeight,
  first,
  showRbtc = false,
  width = "lg:w-[534px]",
}: Readonly<{
  children: React.ReactNode;
  hidemena?: boolean;
  redbgHeight?: string;
  first?: boolean;
  showRbtc?: boolean;
  width?: string;
}>) {
  return (
    <div className=" w-full relative pl-5">
      {!hidemena && (
        <Image
          className=" absolute lg:block hidden left-1 top-[230px] "
          src={showRbtc ? "/images/RBTC.svg" : "/images/home/MENA.svg"}
          alt="MENA"
          width={100}
          height={168}
        />
      )}
      {first && (
        <div
          className={` sm:w-[292px] ${width} ${
            redbgHeight ?? "h-[182px]"
          } rounded-lg lg:rounded-2xl bg-primary03 z-10 absolute top-[0px] left-0 lg:left-[5px] `}
        />
      )}
      {children}
    </div>
  );
}
