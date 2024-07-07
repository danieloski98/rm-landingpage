import { LocationIcon, SearchIcon } from '@/svg'
import React from 'react'
import CustomInput from '../shared/customInput'
import { contactinfo } from '@/constant'
import Image from 'next/image'

export default function Contact() {
    return (
        <div className=' w-full py-20 ' >
            <div className=' relative h-full ' > 
                <CustomInput leftIcon={<SearchIcon />} placeholder='Search by Campus, Country...' width='427px' height='56px' />
                <div className=' w-full mt-8 py-10 flex flex-col gap-12 ' >
                    {contactinfo?.map((item, index) => (
                        <div className=' w-full px-8 border-b border-secondary04 pb-12 flex justify-between ' >
                            <div className=' max-w-[358px] flex flex-col gap-5 ' >
                                <div className=' text-primary flex gap-4 items-center ' >
                                    <h4 className=' text-2xl font-bold ' >{item?.name}</h4>
                                    <div className=' w-6 h-6 bg-secondary01 flex justify-center items-center rounded-sm ' >
                                        <Image src={item?.name?.toLowerCase()?.includes("egypt") ? "/images/contact/Egypt.png" : item?.name?.toLowerCase()?.includes("lebanon") ? "/images/contact/Lebanon.png" : "/images/contact/Turkiye.png"} width={18.67} height={14} alt={item?.name} />
                                    </div>
                                </div>
                                <p className=' leading-6' >{item?.details}</p>
                                <div className=' flex gap-4 items-center ' >
                                    <LocationIcon/>
                                    <p className=' underline leading-6 text-sm ' >Locate Campus</p>
                                    <p className=' underline leading-6 text-sm ' >Send Message</p>
                                </div>
                            </div>
                            <div className=' w-[257px] gap-1 flex flex-col ' >
                                <h6 className=' text-lg leading-[28px] font-bold ' >Contact Address</h6>
                                <p className=' text-xs leading-[22px] ' >{item?.address?.name}</p>
                                <p className=' text-xs leading-[22px] ' >{item?.address?.contact_location}</p>
                                <p className=' text-xs leading-[22px] ' >Email: {item?.address?.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
