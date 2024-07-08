import React from 'react'
import Newsletter from './newsletter'

export default function Enrollcomponent({
    shownewletter
}: {
    shownewletter?: boolean
}) {
    return (
        <div className=' w-full lg:px-[116px] py-12 flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between ' >
            <div className=' flex flex-col ' >
                <h3 className=' text-[32px] leading-[48px] font-bold ' >Get Enrolled Today!</h3>
                <p className=' leading-6 max-w-[550px] mt-4 ' >{`RHEMA is a Bible school that helps you know God’s Word. When you Know God’s Words you will grow in your faith and apply it to your life.`}</p>
                <button className=' text-sm mt-5 leading-[22px] border w-fit border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ' >
                    APPLY NOW!
                </button>
            </div>
            {shownewletter && ( 
                <Newsletter />
            )}
        </div>
    )
}