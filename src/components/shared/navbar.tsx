"use client"
import { navbarlinks } from '@/constant'
import { MenuIcon } from '@/svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {

    const [show, setShow] = useState("")

    const pathname = usePathname()

    const activeLink = (item: {
        name: string;
        link: string
    }) => {


        if (pathname?.includes(item?.link) && item?.link !== "/") {
            return "border-secondary01 text-white "
        } else if (item?.link === pathname) {
            return "border-secondary01 text-white "
        } else {
        } else {
            return "border-transparent text-secondary02"
        }
        }

    } 
    } 

    // const clickHandler = (item: string) => {
    //     if (show) {
    //         setShow("")
    //     } else {
    //         setShow(item)
    //     }
    // }

    return (
        <div className="w-auto h-auto mb-4">
            <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
                {sublink.length < 1 && (
                    <Link className={`font-semibold text-md ${pathname.includes(name.toLowerCase())  ? "text-red-300" : "text-white"}`} href={link}>{name}</Link>
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
            <div className=' w-full lg:py-0 py-3 flex justify-between lg:items-start items-center ' >
                <Image src={"/images/logo.svg"} width={171} height={59} alt='logo' />
                <div className=' pr-24 hidden lg:flex gap-4 ' >
                    {navbarlinks?.map((item, index) => (
                        <div key={index} className={` relative `} >
                            <Link className={` ${activeLink(item)} border-t-[2px] pt-1 text-sm hover:text-white cursor-pointer ${item?.sublink?.length > 0 ? "" : item?.isDisable ? " " : "relative z-30 "} `} href={item?.link} >{item?.name}</Link>
                            <div onMouseEnter={() => setShow((item?.sublink?.length > 0 && !item?.isDisable) ? item.name : "")} onMouseLeave={() => setShow("")} className={` w-[150px] h-full absolute z-20 top-0 ${show === item?.name ? " bg-transparent " : ""} rounded-2xl ${item?.isDisable ? " cursor-not-allowed " : ""} `} >
                                <div className=' pt-8 ' >
                                    {show === item?.name && (
                                        <div className=' w-full px-4 py-3 flex flex-col bg-secondary10 gap-2 rounded-2xl  ' >
                                            {item?.sublink?.map((subitem, subindex) => (
                                                <Link className={` ${subitem?.link === pathname ? " text-primary03 " : "border-transparent text-primary hover:text-white "} relative pt-1 text-sm   `} key={subindex} href={subitem?.link} >{subitem?.name}</Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' lg:hidden flex ' >
                    <MenuIcon />
                </div>
            </div>
            {navbarlinks.map((item, index) => (
                <NavLink key={index.toString()} {...item} />
            ))}
        </div>
      )}
    </div>
  );
}
