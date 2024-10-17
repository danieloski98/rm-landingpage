import CustomInput from "@/components/shared/customInput";
import HeaderCompontent from "@/components/shared/header";
import Homelayout from "@/components/shared/homelayout";
import { StripeIcon } from "@/svg";
import React, { useState } from "react";

export default function Formcomponent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    recurringPayment: "",
    purposeOfGiving: "",
    dateOfBirth: "",
    city: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    alert("CLICKED");
    console.log(formData);
    // try {
    //   const response = await fetch("/api/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       to: "danielemmanuel257@gmail.com",
    //       subject: "New Donation Form Submission",
    //       text: JSON.stringify(formData, null, 2),
    //     }),
    //   });

    //   if (response.ok) {
    //     alert("Form submitted successfully!");
    //     // Reset form or redirect user
    //   } else {
    //     alert("Failed to submit form. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("An error occurred. Please try again.");
    // }
  };

  return (
    <Homelayout first={true} redbgHeight="lg:h-[107px] h-[51px]">
      <div className=" w-full text-primary lg:px-[116px] z-10 relative py-[10px] ">
        <HeaderCompontent title="Donate Online" body="Partnership" />
        <div className=" w-full pt-12 items-center gap-6 flex flex-col ">
          <div className=" max-w-full lg:max-w-[640px] bg-secondary05 p-5 lg:p-9 w-full flex flex-col gap-6 rounded-2xl border border-secondary04 ">
            <h6 className=" text-lg leading-[28px] font-bold ">
              To Donate to RHEMA MENA Please fill the form below
            </h6>
            <div className=" w-full mt-4 ">
              <CustomInput
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your First & Last Name"
                label="Full Name (required)"
                width="100%"
              />
            </div>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <CustomInput
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                label="Email (required)"
                width="100%"
              />
              <CustomInput
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                label="Phone"
                width="100%"
              />
              <CustomInput
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                label="Amount (USD) (required) "
                width="100%"
              />
              <CustomInput
                name="recurringPayment"
                value={formData.recurringPayment}
                onChange={handleInputChange}
                placeholder="None"
                label="Recurring Payment"
                select
                optionData={[
                  {
                    name: "data",
                    value: "data",
                  },
                  {
                    name: "data",
                    value: "data",
                  },
                  {
                    name: "data",
                    value: "data",
                  },
                ]}
                width="100%"
              />
            </div>
            <CustomInput
              name="purposeOfGiving"
              value={formData.purposeOfGiving}
              onChange={handleInputChange}
              placeholder="Regular Partnership"
              label="Purpose of Giving"
              select
              optionData={[
                {
                  name: "data",
                  value: "data",
                },
                {
                  name: "data",
                  value: "data",
                },
                {
                  name: "data",
                  value: "data",
                },
              ]}
              width="100%"
            />
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <CustomInput
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="Enter Date of Birth"
                label="Date of Birth (required)"
                width="100%"
              />
              <CustomInput
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter City"
                label="City"
                width="100%"
              />
            </div>
            <div className=" w-full flex justify-between py-4 items-center ">
              <StripeIcon />
              <button
                onClick={() => handleSubmit()}
                className=" text-sm leading-[22px] border border-primary03 bg-primary03 h-[48px] px-4 rounded-[8px] "
              >
                Donate
              </button>
            </div>
          </div>
          <div className=" max-w-full lgmax-w-[640px] bg-warning01 p-9 w-full rounded-2xl ">
            <p className=" leading-[22px] text-sm text-light02 ">
              Donations are accepted in all currencies, kindly use your
              Mastercard or Visa Card to give. For international wire transfers,
              kindly send an email to{" "}
              <span className=" text-primary03 font-medium ">
                info@rhemamena.com
              </span>{" "}
              or call{" "}
              <span className=" text-primary03 font-medium ">
                +961 81 206 946
              </span>{" "}
              requesting for wire transfer details.
            </p>
          </div>
        </div>
      </div>
    </Homelayout>
  );
}
