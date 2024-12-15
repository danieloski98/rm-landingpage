"use client";
import { CloseIcon, LocationIcon, SearchIcon } from "@/svg";
import React, { useState } from "react";
import CustomInput from "../shared/customInput";
import { contactinfo } from "@/constant";
import Image from "next/image";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(
    " hidden fixed overflow-hidden inset-0 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0 "
  );
  const [openModal, setOpenModal] = useState(
    " opacity-0 scale-150 -translate-y-full z-[2000] transform relative mx-5 max-w-[640px] w-full bg-secondary05 rounded-[16px] shadow-lg transition-opacity transition-transform duration-300"
  );

  function clickHandler(value: boolean) {
    if (value) {
      setOverlay(overlay?.replace("hidden", "flex"));
      setTimeout(() => {
        setOpenModal(
          openModal?.replace("opacity-0 scale-150 -translate-y-full ", "")
        );
      }, 100);
    } else {
      const newmodal = " -translate-y-full " + openModal;
      setOpenModal(newmodal);
      setTimeout(() => {
        setOpenModal("opacity-0 scale-150" + newmodal);
      }, 100);
      setTimeout(() => setOverlay(overlay?.replace("flex", "hidden")), 300);
    }

    setOpen(value);
  }

  return (
    <div className=" w-full py-20 ">
      <div className=" relative h-full ">
        <div className=" lg:flex hidden ">
          <CustomInput
            leftIcon={<SearchIcon />}
            placeholder="Search by Campus, Country..."
            width="427px"
            height="56px"
          />
        </div>
        <div className=" lg:hidden ">
          <CustomInput
            leftIcon={<SearchIcon />}
            placeholder="Search by Campus, Country..."
            width="100%"
            height="56px"
          />
        </div>
        <div className=" w-full mt-8 py-10 flex flex-col gap-12 ">
          {contactinfo?.map((item, index) => (
            <div
              key={index}
              className=" w-full px-8 border-b border-secondary04 pb-12 flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between "
            >
              <div className=" max-w-[358px] flex flex-col gap-5 ">
                <div className=" text-primary flex gap-4 items-center ">
                  <h4 className=" text-2xl font-bold ">{item?.name}</h4>
                  <div className=" w-6 h-6 bg-secondary01 flex justify-center items-center rounded-sm ">
                    <Image
                      src={
                        item?.name?.toLowerCase()?.includes("egypt")
                          ? "/images/contact/Egypt.png"
                          : item?.name?.toLowerCase()?.includes("lebanon")
                          ? "/images/contact/Lebanon.png"
                          : "/images/contact/Turkiye.png"
                      }
                      width={18.67}
                      height={14}
                      alt={item?.name}
                    />
                  </div>
                </div>
                <p className=" leading-6">{item?.details}</p>
                <div className=" flex gap-4 items-center ">
                  <LocationIcon />
                  <p className=" underline leading-6 text-sm ">Locate Campus</p>
                  <a
                    href="mailto:admin@rhemamena.com"
                    className="underline leading-6 text-sm"
                  >
                    Send Message
                  </a>
                </div>
              </div>
              <div className=" w-[257px] gap-1 flex flex-col ">
                <h6 className=" text-lg leading-[28px] font-bold ">
                  Contact Address
                </h6>
                <p className=" text-xs leading-[22px] ">
                  {item?.address?.name}
                </p>
                {/* <p className=" text-xs leading-[22px] ">
                  {item?.address?.contact_location}
                </p> */}
                <p className=" text-xs leading-[22px] ">
                  Email: {item?.address?.email}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-[32px]">Get Enrolled Today!</h2>
          <p className="text-[16px] mt-8 font-normal lg:w-[510px]">
            RHEMA is a Bible school that helps you know God’s Word. When you
            Know God’s Words you will grow in your faith and apply it to your
            life.
          </p>

          <a href="https://www.dev.rhemamena.com/register" className="w-full lg:w-[137px] h-[48px] flex justify-center items-center rounded-[8px] bg-[#BE0027] text-white text-[15px] font-semibold mt-8">
            APPLY NOW!
          </a>
        </div>
      </div>

      <div id="modal_overlay" className={overlay}>
        {/* <!-- modal --> */}
        <div id="modal" className={openModal}>
          {/* <!-- header --> */}
          <div className="px-4 py-3 w-full flex justify-end  ">
            <button onClick={() => clickHandler(false)}>
              <CloseIcon />
            </button>
          </div>

          {/* <!-- body --> */}
          <div className="w-full ">
            <div className="  ">
              <h4 className="px-5 font-bold leading-[36px] text-2xl ">
                Send us a message
              </h4>
              <p className="px-5 text-sm leading-[22px] pb-3 ">
                Do not hesitate to contact us, we are always happy to talk to
                you.
              </p>
              <form className=" w-full flex flex-col overflow-y-auto max-h-[450px] gap-6 pt-2 px-5 mb-[80px] pb-5 flex-1 ">
                <div className=" w-full mt-4 ">
                  <CustomInput
                    placeholder="Choose Title"
                    select
                    optionData={[
                      {
                        name: "Mr",
                        value: "Mr",
                      },
                      {
                        name: "Mrs",
                        value: "Mrs",
                      },
                      {
                        name: "Miss",
                        value: "Miss",
                      },
                      {
                        name: "Master",
                        value: "Master",
                      },
                    ]}
                    label="Title (required)"
                    width="100%"
                  />
                </div>
                <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                  <CustomInput
                    placeholder="Your First Name"
                    label="First Name (required)"
                    width="100%"
                  />
                  <CustomInput
                    placeholder="Your Last Name"
                    label="Last Name (required)"
                    width="100%"
                  />
                  <CustomInput
                    placeholder="Your email address"
                    label="Email (required)"
                    width="100%"
                  />
                  <CustomInput
                    placeholder="Your phone number"
                    label="Phone"
                    width="100%"
                  />
                </div>
                <CustomInput
                  placeholder="Choose Title"
                  select
                  optionData={[
                    {
                      name: "University One",
                      value: "University One",
                    },
                    {
                      name: "University Two",
                      value: "University Two",
                    },
                    {
                      name: "University Three",
                      value: "University Three",
                    },
                    {
                      name: "University Four",
                      value: "University Four",
                    },
                  ]}
                  label="Campus concerned (required)"
                  width="100%"
                />
                <CustomInput
                  placeholder="The object of contact"
                  label="Topic"
                  width="100%"
                />
                <CustomInput
                  placeholder="Your message"
                  textarea={true}
                  className=" pt-4 "
                  label="Message (required)"
                  width="100%"
                />

                <div className="absolute bg-dark01 bottom-0 rounded-b-[16px] left-0 px-4 h-[80px] border-t border-secondary04 w-full flex justify-end items-center gap-3">
                  <button className=" text-sm leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {open && (
          <div className=" fixed inset-0 bg-[#0000003D] blur-md z-[1000] " />
        )}
        {open && (
          <style>
            {`
                            body{
                                overflow: hidden !important;
                            }
                        `}
          </style>
        )}
      </div>
    </div>
  );
}
