import { navbarlinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className=' w-full h-[167px] relative px-8 pb-4 flex items-end ' >
            <div className=' w-fit absolute top-0 right-16 ' >
                <Image src={"/images/home/navstroke.svg"} width={656} height={122} alt='nav' />
            </div>
            <div className=' w-full flex justify-between ' >
                <Image src={"/images/logo.svg"} width={171} height={59} alt='logo' />
                <div className=' pr-24 flex gap-4 ' >
                    {navbarlinks?.map((item, index) => (
                        <Link className={` ${item?.name === "Home" ? "border-secondary01 text-white  " : "border-transparent text-secondary02"} border-t-[2px] pt-1 text-sm  hover:text-white `} key={index} href={""} >{item?.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
