import Formcomponent from '@/components/partnerpage/donation/formcomponent'
import Enrollcomponent from '@/components/shared/enrollcomponent'
import React from 'react'

export default function DonateOnline() {
    return (
        <div className=' w-full lg:px-[94px]' >
            <div className=" w-full " >
                <Formcomponent />
            </div>
                <Enrollcomponent />
        </div>
    )
}
