import React from 'react'

export default function Enrollcomponent() {
    return (
        <div className=' w-full px-[210px] py-12 ' >
            <h3 className=' text-[32px] leading-[48px] text-primary font-bold ' >Get Enrolled Today!</h3>
            <p className=' leading-6 max-w-[550px] mt-4 ' >{`RHEMA is a Bible school that helps you know God’s Word. When you Know God’s Words you will grow in your faith and apply it to your life.`}</p>
            <button className=' text-sm mt-5 leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ' >
                APPLY NOW!
            </button>
        </div>
    )
}