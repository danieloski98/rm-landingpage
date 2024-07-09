"use client"
import { footerlinks } from '@/constant'
import { DownArrowIcon, LocationIcon } from '@/svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react' 
import DownloadApp from './downloadApp'
import SocialMedia from './socialMedia'
import ContactInfo from './contactInfo'


export default function Footer() {

    const pathname = usePathname() 

    return (
        <div className=' w-full pt-20 pb-5 flex gap-10 flex-col relative ' >
            {/* <div className=' w-full lg:w-[656px] h-[190px] absolute border border-secondary04 rounded-2xl -right-[50%] lg:right-5 -top-[100px] ' /> */}
            <div className=' w-full flex lg:flex-row flex-col h-auto justify-between items-start pt-4 lg:pr-[116px] lg:gap-0 gap-5 ' >
                <div className={` flex ${pathname === "/" ? "flex-col" : " flex-col lg:flex-row w-full lg:justify-between lg:items-center "}  `} >
                    <Image className=' lg:ml-[54px] ' src={"/images/logo.svg"} width={171} height={59} alt='logo' />
                    <div className={` ${pathname === "/" ? " lg:pl-[116px]" : ""} flex flex-col gap-4 mt-5 `} >
                        <div className=' flex items-center gap-3 ' >
                            <LocationIcon />
                            <p className=' text-sm leading-[22px] ' >Lebanon</p>
                            <DownArrowIcon />
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <p className=' text-sm leading-[22px] ' >English (United States)</p>
                            <DownArrowIcon />
                        </div>
                    </div>
                </div>
                <div className=' lg:hidden w-full block ' >
                    <ContactInfo />
                </div>
                {(
                    <div className=' flex max-w-[726px] flex-wrap justify-between w-full pt-2 lg:gap-0 gap-6 text-secondary02 ' >
                        {footerlinks?.map((item, index) => (
                            <div key={index} className=' flex flex-col gap-1 ' >
                                <h6 className=' leading-7 text-lg font-bold mb-2 ' >{item?.title}</h6>
                                {item?.linksdata?.map((subitem, subindex) => (
                                    <Link key={subindex} href={subitem?.link} className=' text-sm leading-[22px] ' >{subitem?.name}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className=' lg:block hidden ' >
                <ContactInfo />
            </div>
            <div className=' flex gap-6 flex-col lg:hidden ' >
                <SocialMedia />
                <DownloadApp />
            </div>
            <div className=' w-full lg:px-[116px]' >
                <div className=' w-full lg:py-0 py-4 lg:h-[57px]  border-t border-secondary04 flex justify-center lg:justify-between lg:items-end  ' >
                    <p className=' leading-6 text-primary ' >© 2023 rhemamena. All rights reserved.</p>
                    <div className=' lg:block hidden ' >
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}
