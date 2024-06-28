import { footerlinks } from '@/constant'
import { AppleStore, DownArrowIcon, FaceBookIcon, GooglePlayStore, InstagramIcon, LocationIcon, YoutubeIcon } from '@/svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className=' w-full pt-20 pb-5 flex gap-10 flex-col ' >
            <div className=' w-full flex h-auto justify-between items-start pt-4 pr-[116px] ' >
                <div className=' flex flex-col ' >
                    <Image className=' ml-[54px] ' src={"/images/logo.svg"} width={171} height={59} alt='logo' />
                    <div className=' pl-[116px] flex flex-col gap-4 mt-5 ' >
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
            </div>
            <div className=' w-full flex px-[116px] justify-between  ' >
                <div className=' flex flex-col gap-1 text-secondary01 ' >
                    <h6 className=' font-bold text-lg leading-[28px] ' >Contact us</h6>
                    <p className=' text-sm leading-[22px] mt-2 ' >RHEMA Lebanon Biblical training Center</p>
                    <p className=' text-sm leading-[22px] ' >+961 81 206 946</p>
                    <p className=' text-sm leading-[22px] ' ><span className='text-secondary02 ' >Email: </span>matt@RhemaConnect.com</p>
                </div>
                <div className=' flex flex-col gap-1 text-secondary01 ' >
                    <h6 className=' font-bold text-lg leading-[28px] ' >Stay updated with our newsletter</h6>
                    <p className=' text-sm leading-[22px] text-secondary02 ' >Contact us</p>
                    <div className=' flex gap-2 mt-3 ' >
                        <input placeholder='Your email address' className=' w-[267px] h-[48px] border border-[#919EAB52] rounded-lg px-4 bg-transparent text-sm leading-[22px] ' />
                        <button className=' text-sm leading-[22px] text-secondary05  border-primary bg-primary h-[48px] px-4 rounded-[8px] ' >
                            Join
                        </button>
                    </div>
                </div>
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
