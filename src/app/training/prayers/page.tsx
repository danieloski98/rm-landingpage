import BlogData from '@/components/shared/blogData'
import Enrollcomponent from '@/components/shared/enrollcomponent'
import Homelayout from '@/components/shared/homelayout'
import PrayerCard from '@/components/shared/prayerCard'
import React from 'react'

export default function Prayers() {
    return (
        <div className=' w-full px-[94px]' >
            <Homelayout first={true} redbgHeight='h-[107px]' >
                <div className=' w-full text-primary px-[116px] z-10 relative py-[10px] ' >
                    <h1 className=' text-[64px] leading-[80px] font-bold ' >MENA Prayer Meetings</h1>
                    <p className=' text-secondary01 leading-6 mt-5 ' >Join the MENA Prayer Meeting</p>
                    <div className=' pt-10 px-10 ' >
                        <PrayerCard />
                    </div>
                </div>
            </Homelayout>
            <Enrollcomponent />
        </div>
    )
}
