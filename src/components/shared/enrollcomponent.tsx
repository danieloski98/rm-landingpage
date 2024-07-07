import React from 'react'

export default function Enrollcomponent({
    shownewletter
}: {
    shownewletter?: boolean
}) {
    return (
        <div className=' w-full px-[116px] py-12 flex justify-between ' >
            <div className=' flex flex-col ' >
                <h3 className=' text-[32px] leading-[48px] font-bold ' >Get Enrolled Today!</h3>
                <p className=' leading-6 max-w-[550px] mt-4 ' >{`RHEMA is a Bible school that helps you know God’s Word. When you Know God’s Words you will grow in your faith and apply it to your life.`}</p>
                <button className=' text-sm mt-5 leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ' >
                    APPLY NOW!
                </button>
            </div>
            {shownewletter && ( 
                <div className=' flex flex-col gap-1 text-secondary01 ' >
                    <h6 className=' font-bold text-lg leading-[28px] ' >Stay updated with our newsletter</h6>
                    <p className=' text-sm leading-[22px] text-secondary02 ' >Contact us</p>
                    <div className=' flex gap-2 mt-3 ' >
                        <input placeholder='Your email address' className=' w-[267px] h-[48px] border border-[#919EAB52] rounded-lg px-4 bg-transparent text-sm leading-[22px] ' />
                        <button className=' text-sm leading-[22px] text-secondary05  border-primary bg-primary h-[48px] px-4 rounded-[8px] ' >
                            Join
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}