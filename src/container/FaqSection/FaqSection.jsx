import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Points=[
    "Can I use ClearLink on multiple devices?",
    "Is ClearLink compatible with other video conferencing platforms?",
    "How does ClearLink ensure the security of my video conferences?",
    "Do I need to download any software to use ClearLink?",
    "What kind of customer support does ClearLink provide?"
]

const FaqSection = () => {
  return (
    <div className="flex h-[912px] py-24 px-40 top-[2914px] gap-24">
      <div className="flex justify-between h-[720px] w-[1408px]">
        <div className="flex flex-col gap-5 h-[216px] w-[547px]">
          <div className="flex flex-col gap-3 h-[100px]">
            <h2 className="text-lg font-semibold text-[#175CD3]">Support</h2>
            <h3 className="font-semibold tracking-tighter text-5xl">FAQs</h3>
          </div>
          <p className="font-normal text-2xl text-[#667085]">
          Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
        </div>
        <div className="flex flex-col gap-1 h-[720px] w-[765px]">
            <div className="h-[214px] rounded-2xl border-[1px] p-8 border-[#EAECF0] bg-[#F9FAFB]">
                <div className="flex justify-between  gap-6 h-[150px] w-[701px]">
                    <div className="flex-col">
                    <h2 className="text-xl font-semibold text-[#101828] w-[653px] h-[30px]">How many participants can join a ClearLink video conference?</h2>
                    <p className="h-[112px] w-[653px] text-lg font-normal text-[#475467]">
                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                    </p>
                    </div>
                    <h2><GrSubtractCircle className="w-6 h-6 text-[#98A2B3]"/></h2>
                </div>
            </div>
            <div className=" flex flex-col p-8 rounded-2xl h-[94px] space-y-6">
                {
                    Points.map((point,index)=>(
                        <div key={index} className="w-full h-[30px] flex justify-between gap-6">
                            <h2 className="font-semibold text-xl text-[#101828]">{point}</h2>
                            <button className="w-6 h-[26px] pt-[2px] p-0"><IoIosAddCircleOutline className="w-6 h-6 text-[#98A2B3]"/></button>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
