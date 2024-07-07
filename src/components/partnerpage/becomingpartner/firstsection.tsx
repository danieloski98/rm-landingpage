import React from 'react'
import Homelayout from '../../shared/homelayout'

export default function Firstsection() {
    return (
        <Homelayout first={true} redbgHeight='h-[107px]' >
            <div className=' w-full text-primary pl-[116px] z-10 relative py-[10px] ' >
                <h1 className=' text-[64px] leading-[80px] font-bold ' >Become a Partner</h1>
                <p className=' text-secondary01 leading-6 mt-5 ' >Partnership</p>
                <div className=' w-full pt-16 flex flex-col ' >
                    <h3 className=' text-center font-bold text-[32px] mx-auto w-fit leading-[48px] pb-1 border-b border-primary03 ' >A LETTER TO OUR PARTNERS FROM KENNETH W. HAGIN</h3>
                    <div className=' w-full flex mt-10 gap-8 ' >
                        <div className=' w-[404px] h-[270px] rounded-2xl bg-green-500 ' >

                        </div>
                        <div className=' flex flex-col flex-1 ' >
                            <h5 className=' text-[20px] leading-[30px] text-primary font-bold ' >Dear Friend,</h5>
                            <p className=' leading-[24px] mt-4 text-primary ' >
                                {`Everyone wants to be a part of something greater than themselves. We dream of changing the world, making it a better place for us and our children. We dream of making a difference.`}
                                <br/><br/>
                                {`In a world filled with fear, oppression, and sickness—a world where people die every day without knowing their Savior—you can make that difference. Your mission, should you choose to accept it, is to join us in reaching the world for Jesus.`}
                                <br/><br/>
                                {`RHEMA Partners are vital members of the Rhema family. Through their prayers and financial support, they help fulfill God’s plan to save people and set them free. Together, we are reaching across generations, cultures, and nations to share the Good News of Jesus Christ and the message of faith in God with men, women, and children in every corner of the earth.`}
                                <br/><br/>
                                {`If you’ve been helped, strengthened, or blessed through this ministry, we encourage you to become an essential piece of what we do. Become a Partner and join the adventure. Live the life you were meant to live, leave your mark throughout the earth, and experience the joy and satisfaction that come only with knowing you have made a difference—an eternal difference—in life after life around the world.`}
                                <br/><br/>
                                {`In Christ,`}
                            </p>
                            <h5 className=' text-[20px] leading-[30px] text-primary font-bold mt-4 ' >Kenneth W. Hagin</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Homelayout>
    )
}
