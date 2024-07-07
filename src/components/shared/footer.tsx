"use client"
import { footerlinks } from '@/constant'
import { AppleStore, DownArrowIcon, FaceBookIcon, GooglePlayStore, InstagramIcon, LocationIcon, YoutubeIcon } from '@/svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Newsletter from './newsletter'

interface IProps {
    hide?: boolean
}

export default function Footer({ hide }: IProps) {

    const pathname = usePathname()

    console.log(pathname);

    return (
        <div className=' w-full pt-20 pb-5 flex gap-10 flex-col relative ' > 
            <div className=' w-[656px] h-[190px] absolute border border-secondary04 rounded-2xl right-5 -top-[100px] ' />
            <div className=' w-full flex h-auto justify-between items-start pt-4 pr-[116px] ' >
                <div className={` flex ${pathname === "/" ? "flex-col" : " flex-row w-full justify-between items-center "}  `} >
                    <Image className=' ml-[54px] ' src={"/images/logo.svg"} width={171} height={59} alt='logo' />
                    <div className={` ${pathname === "/" ? "pl-[116px]" : ""} flex flex-col gap-4 mt-5 `} >
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
                {pathname === "/" && (
                    <div className=' flex max-w-[726px] justify-between w-full pt-2 text-secondary02 ' >
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
            {pathname === "/" && (
                <div className=' w-full flex px-[116px] justify-between  ' >
                    <div className=' flex flex-col gap-1 text-secondary01 ' >
                        <h6 className=' font-bold text-lg leading-[28px] ' >Contact us</h6>
                        <p className=' text-sm leading-[22px] mt-2 ' >RHEMA Lebanon Biblical training Center</p>
                        <p className=' text-sm leading-[22px] ' >+961 81 206 946</p>
                        <p className=' text-sm leading-[22px] ' ><span className='text-secondary02 ' >Email: </span>matt@RhemaConnect.com</p>
                    </div>
                    <Newsletter />
                    <div className=' flex flex-col gap-1 text-white ' >
                        <p className=' text-sm leading-[22px] ' >Download the <br /> Student App</p>
                        <div className=' mt-3 flex flex-col gap-4 ' >
                            <button className=' w-[135px] h-[40px] ' >
                                <AppleStore />
                            </button>
                            <button className=' w-[135px] h-[40px] ' >
                                <GooglePlayStore />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className=' w-full px-[116px]' >
                <div className=' w-full h-[57px]  border-t border-secondary04 flex justify-between items-end  ' >
                    <p className=' leading-6 text-primary ' >© 2023 rhemamena. All rights reserved.</p>
                    <div className=' flex gap-4 items-center ' >
                        <Link href={""} target="_blank" >
                            <FaceBookIcon />
                        </Link>
                        <Link href={""} target="_blank" >
                            <InstagramIcon />
                        </Link>
                        <Link href={""} target="_blank" >
                            <YoutubeIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
