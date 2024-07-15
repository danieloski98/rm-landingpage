"use client";
import React from "react";
import Navbar from "./navbar";
import Footer from "../footer";
import { usePathname } from "next/navigation";

export default function Landingpagelayout({
  children,
  hidemena,
  hidefooterinfo,
}: Readonly<{
  children: React.ReactNode;
  hidemena?: boolean;
  hidefooterinfo?: boolean;
}>) {
  const pathname = usePathname();

  return (
    <main className="flex w-full overflow-x-hidden h-auto flex-col items-center ">
      <Navbar />
      <div
        className={` w-full lg:px-0  ${pathname === "/training/blog" ? "px-0" : "px-6"} `}
      >
        {children}
        <div className=" w-full lg:px-[94px] px-3 ">
          <Footer />
        </div>
      </div>
    </main>
  );
}
