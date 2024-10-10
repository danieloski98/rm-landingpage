import Enrollcomponent from "@/components/shared/enrollcomponent";
import HeaderCompontent from "@/components/shared/header";
import Homelayout from "@/components/shared/homelayout";
import React from "react";

export default function About() {
  return (
    <div className=" w-full lg:px-[50px] ">
      <Homelayout first={true} redbgHeight=" lg:h-[182px] h-[51px]" showRbtc>
        <div className="w-[359px] h-[193px] bg-[#828282] absolute top-48 rounded-[16px] hidden lg:flex flex-col justify-end p-[20px] right-[100px]">
          <p className="text-md font-normal">
            The sun never sets on a RHEMA graduate preaching the word or God.
          </p>
          <p className="mt-6 text-[#4C0010] text-md font-bold">
            KENNETH W. HAGIN
          </p>
        </div>
        <div className=" w-full text-primary lg:px-[116px] z-10 relative lg:py-[115px] py-[10px] ">
          <HeaderCompontent title="Bible Training Campuses" body="" />
          <p className=" max-w-[606px] mt-4 leading-6 ml-6">
            <span>
              {`RHEMA Lebanon is a center of excellence for Spirit-led,
              {`RHEMA Lebanon is a center of excellence for Spirit-led,
              Bible-based, practical leadership training that empowers and
              strengthens Gods Church to fulfill its purpose in Lebanon and
              strengthens Gods Church to fulfill its purpose in Lebanon and
              beyond. RBTC begins by training believers to lead themselves as
              they discover and qualify for their God-given purpose. Then,
              building on this foundation, the training provides value for three
              types of leaders: Spiritual Leaders (Apostle, Prophet, Evangelist,
              Pastor & Teacher).`}
              Pastor & Teacher).`}
            </span>
            <br /> <br />
            <span>
              {`These lead the church. They are the vision carriers. Supportive
              {`These lead the church. They are the vision carriers. Supportive
              Leadership (Assistant Pastors, Children & Youth Directors, Worship
              leaders, Department Heads, Administrators, Media, etc.) - these
              are called to assist Spiritual Leaders in fulfilling the vision
              God has asked them to steward. 
              
             `}
            </span>
            <br /> <br />
            <span>
              {`
                Strong Spiritual and Supportive
              leaders build strong churches, producing Societal Leaders who
              become catalysts for Godly change in their families, communities,
              cities, and nations. Societal Leaders include Business Owners and
              Executives, Health Care Providers, Educators, Media influencers,
              Public Servants, and even moms and dads who influence their
              families and communities for Christ. These also work to use their
              resources, talents, and influence to support God's Church.`}
            </span>
            <br />
          </p>
          <div className=" w-full flex flex-col gap-4 py-10 ">
            <div className=" flex lg:items-center lg:flex-row flex-col gap-4 ">
              <div className=" w-[146px] h-[95px] rounded-lg bg-slate-600  overflow-hidden">
                <img
                  src="/images/alex.svg"
                  alt="alex"
                  className="w-full h-full"
                />
              </div>
              <div className=" flex-col gap-2 flex ">
                <p className=" leading-6 ">
                  ALEXENDRIA,{" "}
                  <span className=" text-sm font-medium leading-[22px] ">
                    EGYPT
                  </span>
                </p>
                <p className=" text-xs leading-[18px] max-w-[336px] ">
                  {/* Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas
                  at fermentum sit et urna in. Vitae sollicitudin et sagittis
                  orci enim adipiscing.{" "} */}
                </p>
              </div>
            </div>
            <div className=" flex lg:items-center lg:flex-row flex-col gap-4 ">
              <div className=" w-[146px] h-[95px] rounded-lg bg-slate-600  overflow-hidden">
                <img
                  src="/images/cairo.svg"
                  alt="alex"
                  className="w-full h-full"
                />
              </div>
              <div className=" flex-col gap-2 flex ">
                <p className=" leading-6 ">
                  CAIRO,{" "}
                  <span className=" text-sm font-medium leading-[22px] ">
                    EGYPT
                  </span>
                </p>
                <p className=" text-xs leading-[18px] max-w-[336px] ">
                  {/* Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas
                  at fermentum sit et urna in. Vitae sollicitudin et sagittis
                  orci enim adipiscing.{" "} */}
                </p>
              </div>
            </div>
            <div className=" flex lg:items-center lg:flex-row flex-col gap-4 ">
              <div className=" w-[146px] h-[95px] rounded-lg bg-slate-600  overflow-hidden">
                <img
                  src="/images/bu.svg"
                  alt="alex"
                  className="w-full h-full"
                />
              </div>
              <div className=" flex-col gap-2 flex ">
                <p className=" leading-6 ">
                  BERUIT,{" "}
                  <span className=" text-sm font-medium leading-[22px] ">
                    LEBANON
                  </span>
                </p>
                <p className=" text-xs leading-[18px] max-w-[336px] ">
                  {/* Lorem ipsum dolor sit amet consectetur. Tincidunt ac maecenas
                  at fermentum sit et urna in. Vitae sollicitudin et sagittis
                  orci enim adipiscing.{" "} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Homelayout>
      <Enrollcomponent shownewletter={true} />
    </div>
  );
}
