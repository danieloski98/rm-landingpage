"use client";
import { navbarlinks } from "@/constant";
import { MenuIcon } from "@/svg";
import { ArrowDown2, ArrowUp2, CloseCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface INavlinks {
    name: string;
    link: string;
    sublink: Array<{ name: string; link: string, isDisbale?: boolean, external: boolean }>;
    external: boolean;
    isDisable: boolean;
}

const NavLink = ({ name, link, sublink, external, isDisable }: INavlinks) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(()=> {
        setIsOpen(false)
    }, [pathname])


    return (
        <div className="w-auto h-auto mb-4">
            <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
                {sublink.length < 1 && (
                    <Link className={`font-semibold text-md ${pathname.includes(name.toLowerCase()) ? "text-red-300" : "text-white"}`} href={link}>{name}</Link>
                )}
                {sublink.length > 0 && (
                    <p className="font-semibold text-md">{name}</p>
                )}
                {sublink?.length > 0 && (
                    <>
                        {isOpen && <ArrowUp2 variant="Outline" size={'20px'} color="white" className="ml-3" />}
                        {!isOpen && <ArrowDown2 variant="Outline" size={'20px'} color="white" className="ml-3" />}
                    </>
                )}
            </div>
            {sublink?.length > 0 && isOpen && (
                <div className="flex flex-col mt-4 ml-6">
                    {sublink?.map((item, index) => (
                        <Link
                            className={`font-normal text-sm mb-3 ${pathname.includes(name.toLowerCase()) ? "text-red-300" : "text-white"}`}
                            href={item?.link}
                            key={index}  
                        >
                            - {item?.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}


export default function Navbar() {
    const [show, setShow] = useState("");
    const [showDrawer, setShowDrawer] = React.useState(false);

    const pathname = usePathname();

    const activeLink = (item: {
        name: string;
        link: string;
    }) => {
        if (pathname?.includes(item?.link) && item?.link !== "/") {
            return "border-secondary01 text-white ";
        } else if (item?.link === pathname) {
            return "border-secondary01 text-white ";
        } else {
            return "border-transparent text-secondary02";
        }
    };

    return (
        <div className={` w-full h-[122px] lg:h-[167px] relative px-6 lg:px-8 pb-4 flex lg:items-end ${pathname === "/training/blog" ? "sm:bg-[#212B36]" : ""} lg:bg-transparent `}>
            <div className=" w-fit absolute top-0 right-16 ">
                <Image
                    src={"/images/home/navstroke.svg"}
                    width={656}
                    height={122}
                    alt="nav"
                />
            </div>
            <div className=" w-full lg:py-0 py-3 flex justify-between lg:items-start items-center ">
                <Image src={"/images/logo.svg"} width={171} height={59} alt="logo" />
                <div className=" pr-24 hidden lg:flex gap-4 ">
                    {navbarlinks?.map((item, index) => (
                        <div key={index} className={` relative w-full `}>
                            <Link
                                className={` ${activeLink(item)
                                    } border-t-[2px] pt-1 text-sm hover:text-white cursor-pointer whitespace-nowrap  ${item?.sublink?.length > 0
                                        ? ""
                                        : item?.isDisable
                                            ? " "
                                            : "relative z-20 "
                                    } `}
                                href={item?.link}
                            >
                                {item?.name}
                            </Link>
                            <div
                                onMouseEnter={() =>
                                    setShow(
                                        (item?.sublink?.length > 0 && !item?.isDisable)
                                            ? item.name
                                            : "",
                                    )}
                                // onMouseLeave={() => setShow("")}
                                className={` w-[155px] h-full absolute top-0 ${show === item?.name ? " bg-transparent " : ""
                                    } rounded-2xl ${item?.isDisable ? " cursor-not-allowed " : ""
                                    } `}
                            >
                                <div className=" pt-8 ">
                                    {show === item?.name && (
                                        <div className=" w-full px-4 py-3 flex flex-col bg-secondary10  relative z-30 gap-2 rounded-2xl ">
                                            {item?.sublink?.map((subitem, subindex) => (
                                                <Link
                                                    className={` ${subitem?.link === pathname
                                                            ? " text-primary03 "
                                                            : "border-transparent text-primary hover:text-white "
                                                        } relative pt-1 text-sm cursor-pointer `}
                                                    key={subindex}
                                                    href={subitem?.link}
                                                    onClick={() => setShowDrawer(false)}
                                                >
                                                    {subitem?.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className=" lg:hidden flex "
                    onClick={() => setShowDrawer((prev) => !prev)}
                >
                    <MenuIcon />
                </div>
            </div>

            {showDrawer && (
                <div className="w-[80%] h-screen absolute right-0 bg-gray-700 z-50 px-5 ">
                    <div className="w-full h-24 flex justify-end items-center">
                        <CloseCircle onClick={() => setShowDrawer(false)} />
                    </div>
                    {navbarlinks.map((item, index) => (
                        <NavLink key={index.toString()} {...item} />
                    ))}
                </div>
            )}
        </div>
    );
}