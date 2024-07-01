import Formcomponent from '@/components/partnerpage/donation/formcomponent'
import Enrollcomponent from '@/components/shared/enrollcomponent'
import React from 'react'

export default function DonateOnline() {
    return (
        <div className=' w-full ' >
            <div className=" w-full px-[94px] " >
                <Formcomponent />
            </div>
                <Enrollcomponent />
        </div>
    )
}
