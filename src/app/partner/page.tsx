import Firstsection from '@/components/partnerpage/becomingpartner/firstsection'
import Secondsection from '@/components/partnerpage/becomingpartner/secondsection'
import Enrollcomponent from '@/components/shared/enrollcomponent'
import React from 'react'

export default function Partner() {
    return (
        <div className=' w-full ' >
            <div className=" w-full lg:px-[50px] " >
                <Firstsection />
            </div>
            <Secondsection />
            <Enrollcomponent />
        </div>
    )
}
