import Enrollcomponent from '@/components/shared/enrollcomponent'
import Homelayout from '@/components/shared/homelayout'
import { tuitionfee } from '@/constant'
import { HeartCircle } from '@/svg'
import React from 'react'

export default function Apply() {
    return (
        <div className=' w-full px-[94px]' >
            <Homelayout first={true} redbgHeight='h-[107px]' >
                <div className=' w-full text-primary px-[116px] z-10 relative py-[10px] ' >
                    <h1 className=' text-[64px] leading-[80px] font-bold ' >Tuition & Cost</h1>
                    <p className=' text-secondary01 leading-6 mt-5 ' >RHEMA MENA</p>
                    <div className=' w-full flex justify-center ' >
                        <div className=' max-w-[880px] w-full pt-12 gap-10 flex flex-col ' >
                            <div className=' w-full flex flex-col gap-6 ' >
                                {tuitionfee?.map((item, index) => (
                                    <div className=' w-full flex pb-6 border-b gap-12 border-secondary04 ' >
                                        <p className=' leading-6 w-[200px] ' >{item?.name}</p>
                                        <p className=' font-bold leading-[28px] text-lg ' >{item?.fee} <span className=' text-base leading-6 font-normal ' >{item?.name === "Module Tution payment" && "(per module weekend)"}</span></p>
                                    </div>
                                ))}
                            </div>
                            <div className=' w-full border border-secondary04 rounded-2xl p-6 flex justify-between items-center ' >
                                <div className=' flex gap-3 items-center ' >
                                    <HeartCircle />
                                    <div className=' flex flex-col ' >
                                        <h4 className=' text-2xl leading-9 font-bold ' >Support for scholarships</h4>
                                        <p className=' leading-6 ' ><span className=' text-lg font-bold ' >$78</span> per month for 24 months</p>
                                    </div>
                                </div>
                                <p role='button' className=' underline font-medium leading-6 ' >Visit Club1040 to Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Homelayout>
            <Enrollcomponent />
        </div>
    )
}
