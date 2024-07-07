import Contact from '@/components/contact'
import Homelayout from '@/components/shared/homelayout'
import React from 'react'

export default function ContactPage() {
    return (
        <div className=' w-full ' >
            <Homelayout first={true} redbgHeight='h-[107px]' >
                <div className=' w-full text-primary px-[116px] z-10 relative py-[10px] ' >
                    <h1 className=' text-[64px] leading-[80px] font-bold ' >Reach RHEMA MENA</h1>
                    <p className=' text-secondary01 leading-6 mt-5 ' >Reach us from anywhere in the Middle East & North Africa Region</p> 
                    <Contact />
                </div>
            </Homelayout>
        </div>
    )
}
