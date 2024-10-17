"use client";
import { footerlinks } from "@/constant";
import { DownArrowIcon, LocationIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadApp from "./downloadApp";
import SocialMedia from "./socialMedia";
import ContactInfo from "./contactInfo";
import { usePathname, useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import checkdata from "@/store/checklang";
import LanguageSelector from "../LanguageSelector";

export default function Footer() {
  const pathname = usePathname();

  const { setCheck } = checkdata((state) => state);
  const router = useRouter();

  const headerData = [
    { label: "Arabic", value: "/auto/ar", image: "/images/flag1.png" },
    { label: "Farsi", value: "/auto/fa", image: "/images/flag2.jpg" },
    { label: "Turkish", value: "/auto/tr", image: "/images/flag3.png" },
    { label: "English", value: "/auto/en", image: "/images/flag4.png" },
    { label: "Spanish", value: "/auto/es", image: "/images/flag5.png" },
    { label: "French", value: "/auto/fr", image: "/images/flag6.png" },
    { label: "Portuguese", value: "/auto/pt", image: "/images/flag7.png" },
    { label: "Italian", value: "/auto/it", image: "/images/flag8.png" },
  ];

  const clickHandler = (item: string) => {
    setCookie("googtrans", decodeURI(item));
    setCheck(item);
    // router.push("/home/resources");
  };

  return (
    <div className=" w-full pt-20 pb-5 flex gap-10 flex-col relative ">
      <div className=" w-full lg:w-[569px] h-[253px] absolute bg-[#BE0027] rounded-2xl -right-[50%] lg:right-[-340px] top-[10px] opacity-25 z-10 " />
      <div className=" w-full flex lg:flex-row flex-col h-auto justify-between items-start pt-4 lg:pr-[116px] lg:gap-0 gap-5 z-30 ">
        <div
          className={` flex ${
            pathname === "/"
              ? "flex-col"
              : " flex-col lg:flex-row w-full lg:justify-between lg:items-center "
          }  `}
        >
          <Image
            className=" lg:ml-[54px] "
            src={"/images/logo.svg"}
            width={171}
            height={59}
            alt="logo"
          />
          <div
            className={` ${
              pathname === "/" ? " lg:pl-[116px]" : ""
            } flex flex-col gap-4 mt-5 `}
          >
            <div className=" flex items-center gap-3 ">
              <LocationIcon />
              <p className=" text-sm leading-[22px] ">Lebanon</p>
              <DownArrowIcon />
            </div>
            <div className=" flex items-center gap-3 ">
              <LanguageSelector />
              <div
                id="google_translate_element"
                style={{
                  width: "0px",
                  height: "0px",
                  position: "absolute",
                  left: "50%",
                  zIndex: -99999,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className=" lg:hidden w-full block ">
          <ContactInfo />
        </div>
        {
          <div className=" flex max-w-[726px] flex-wrap justify-between w-full pt-2 lg:gap-0 gap-6 text-secondary02 ">
            {footerlinks?.map((item, index) => (
              <div key={index} className=" flex flex-col gap-1 ">
                <h6 className=" leading-7 text-lg font-bold mb-2 ">
                  {item?.title}
                </h6>
                {item?.linksdata?.map((subitem, subindex) => (
                  <Link
                    key={subindex}
                    href={subitem?.link}
                    className=" text-sm leading-[22px] "
                  >
                    {subitem?.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        }
      </div>
      <div className=" lg:block hidden ">
        <ContactInfo />
      </div>
      <div className=" flex gap-6 flex-col lg:hidden ">
        <SocialMedia />
        <DownloadApp />
      </div>
      <div className=" w-full lg:px-[116px]">
        <div className=" w-full lg:py-0 py-4 lg:h-[57px]  border-t border-secondary04 flex justify-center lg:justify-between lg:items-end  ">
          <p className=" leading-6 text-primary ">
            © 2024 RHEMA MENA. All rights reserved.
          </p>
          <div className=" lg:block hidden ">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
