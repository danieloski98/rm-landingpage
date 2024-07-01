import CustomInput from '@/components/shared/customInput'
import Homelayout from '@/components/shared/homelayout'
import { StripeIcon } from '@/svg'
import React from 'react'

export default function Formcomponent() {
    return (
        <Homelayout>
            <div className=' w-[534px] h-[107px] rounded-2xl bg-primary03 z-10 absolute top-0 left-[50px] ' />
            <div className=' w-full text-primary px-[116px] z-10 relative py-[10px] ' >
                <h1 className=' text-[64px] leading-[80px] font-bold ' >Donate Online</h1>
                <p className=' text-secondary01 leading-6 mt-5 ' >Partnership</p>
                <div className=' w-full pt-12 items-center gap-6 flex flex-col ' >
                    <form className=' max-w-[640px] bg-secondary05 p-9 w-full flex flex-col gap-6 rounded-2xl border border-secondary04 ' >
                        <h6 className=' text-lg leading-[28px] font-bold ' >To Donate to RHEMA MENA Please fill the form below</h6>
                        <div className=' w-full mt-4 ' >
                            <CustomInput placeholder='Your First & Last Name' label='Full Name (required)' width='100%' />
                        </div>
                        <div className=' w-full grid grid-cols-2 gap-6 ' >
                            <CustomInput placeholder='Your email address' label='Email (required)' width='100%' />
                            <CustomInput placeholder='Your phone number' label='Phone' width='100%' />
                            <CustomInput placeholder='0.00' label='Amount (USD) (required) ' width='100%' />
                            <CustomInput placeholder='None' label='Recurring Payment' width='100%' />
                        </div>
                        <CustomInput placeholder='Regular Partnership' label='Purpose of Giving' width='100%' />
                        <div className=' w-full grid grid-cols-2 gap-6 ' >
                            <CustomInput placeholder='Enter Date of Birth' label='Date of Birth (required)' width='100%' />
                            <CustomInput placeholder='Enter City' label='City' width='100%' />
                        </div>
                        <div className=' w-full flex justify-between py-4 items-center ' >
                            <StripeIcon />
                            <button className=' text-sm leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ' >
                                Donate
                            </button>
                        </div>
                    </form>
                    <div className=' max-w-[640px] bg-warning01 p-9 w-full rounded-2xl ' >
                        <p className=' leading-[22px] text-sm text-light02 ' >
                            Donations are accepted in all currencies, kindly use your Mastercard or Visa Card to give. For international wire transfers, kindly send an email to <span className=' text-primary03 font-medium ' >info@rhemamena.com</span> or
                            call <span className=' text-primary03 font-medium ' >+961 81 206 946</span> requesting for wire transfer details.
                        </p>
                    </div>
                </div>
            </div>
        </Homelayout>
    )
}
