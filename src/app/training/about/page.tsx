import Enrollcomponent from '@/components/shared/enrollcomponent'
import Homelayout from '@/components/shared/homelayout'
import React from 'react'

export default function About() {
    return (
        <div className=' w-full ' >
            <Homelayout first={true} >
                <div className=' w-full text-primary px-[116px] z-10 relative py-[115px] ' >
                    <h1 className=' text-5xl leading-[64px] font-bold ' >Bible Training Campuses</h1>
                    <p className=' max-w-[606px] mt-4 leading-6 ' >
                        {`Reach us from anywhere in the Middle East & North Africa Region RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
                        <br /><br />
                        {`Reach us from anywhere in the Middle East & North Africa Region RHEMA MENA is a regional extension of Kenneth Hagin’s Rhema Bible Training College - with same goal of strengthening God’s Church to fulfill its purpose in the MENA region.`}
                    </p>
                    <div className=' w-full flex flex-col gap-4 py-10 ' >
                        <div className=' flex items-center gap-4 ' >
                            <div className=' w-[146px] h-[95px] rounded-lg bg-slate-600 ' >

                            </div>
                            <div className=' flex-col gap-2 flex ' >
                                <p className=' leading-6 ' >ALEXENDRIA, <span className=' text-sm font-medium leading-[22px] ' >EGYPT</span></p>
                                <p className=' text-xs leading-[18px] max-w-[336px] ' >Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas at fermentum sit et urna in. Vitae sollicitudin et sagittis orci enim adipiscing. </p>
                            </div>
                        </div>
                        <div className=' flex items-center gap-4 ' >
                            <div className=' w-[146px] h-[95px] rounded-lg bg-slate-600 ' >

                            </div>
                            <div className=' flex-col gap-2 flex ' >
                                <p className=' leading-6 ' >CAIRO, <span className=' text-sm font-medium leading-[22px] ' >EGYPT</span></p>
                                <p className=' text-xs leading-[18px] max-w-[336px] ' >Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas at fermentum sit et urna in. Vitae sollicitudin et sagittis orci enim adipiscing. </p>
                            </div>
                        </div>
                        <div className=' flex items-center gap-4 ' >
                            <div className=' w-[146px] h-[95px] rounded-lg bg-slate-600 ' >

                            </div>
                            <div className=' flex-col gap-2 flex ' >
                                <p className=' leading-6 ' >BERUIT, <span className=' text-sm font-medium leading-[22px] ' >LEBANON</span></p>
                                <p className=' text-xs leading-[18px] max-w-[336px] ' >Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas at fermentum sit et urna in. Vitae sollicitudin et sagittis orci enim adipiscing. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Homelayout>
            <Enrollcomponent />
        </div>
    )
}