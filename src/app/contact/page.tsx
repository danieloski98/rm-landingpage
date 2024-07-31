import Contact from '@/components/contact'
import HeaderCompontent from '@/components/shared/header'
import Homelayout from '@/components/shared/homelayout'
import React from 'react'

export default function ContactPage() {
    return (
        <div className=' w-full lg:px-[50px] ' >
            <Homelayout first={true} redbgHeight='lg:h-[107px] h-[51px] ' >
                <div className=' w-full text-primary lg:px-[116px] z-10 relative py-[10px] ' >
                    <HeaderCompontent title='Reach RHEMA MENA' body='Reach us from anywhere in the Middle East & North Africa Region' /> 
                    <Contact />
                </div>
            </Homelayout>
        </div>
    )
}
