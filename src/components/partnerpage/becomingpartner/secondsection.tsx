import { partnerlinks } from '@/constant'
import Link from 'next/link'
import React from 'react'

export default function Secondsection() {
    return (
        <div className=' w-full flex justify-center bg-secondary04 px-[210px] py-20 relative text-primary ' >
            <div className=' max-w-[1181px] w-full bg-secondary05 py-16 p-12 rounded-2xl relative ' >
                <div className=' w-[55%] h-[75%] rounded-tl-2xl rounded-br-2xl absolute top-0 left-0 bg-secondary10 ' />
                <div className=' w-[569px] h-[266px] bg-opacity-10 bg-primary03 rounded-2xl absolute -bottom-10 right-5 ' />
                <div className=' w-full flex relative ' >
                    {partnerlinks?.map((item, index) => (
                        <div className=' w-full flex flex-col gap-3 ' >
                            <div className=' w-20 h-20 rounded-full bg-blue-800 ' >

                            </div>
                            <div className=' ' >
                                <h4 className=' text-2xl leading-[36px] font-bold text-primary ' >{item?.name}</h4>
                                <Link href={item?.link} className=' underline leading-6 text-grey500 ' >Click here sign up</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}