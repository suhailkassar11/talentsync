import React from "react";
import { images } from "../constants";
import { IoMicOutline, IoVideocamOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { CiFaceSmile, CiSettings } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Icons = [
  {id:1,icon:<IoMicOutline />},
  {id:2,icon:<IoVideocamOutline />},
  {id:3,icon:<LuMonitor />},
  {id:4,icon:<CiFaceSmile />},
  {id:5,icon:<BiMessageRoundedDetail />},
  {id:6,icon:<CiSettings />},
];

const HeroSection = () => {
  return (
    <div className="flex md:w-auto w-[1408px] h-[488px] justify-between items-center">
      <div className="flex flex-col gap-[48px] h-[472px] w-[780px]">
        <div className="flex flex-col gap-[24px] h-[264px] w-[780px]">
          <h2 className="font-inter text-4xl font-semibold leading-10 tracking-tighter text-left">
            Uniting the world,
            <br />
            one video call at a
          </h2>
          <p className="w-[662px] h-[96px] font-inter text-lg font-normal leading-[32px] tracking-normal text-left text-[#667085]">
            Experience the future of communication with ClearLink – <br /> where
            crystal-clear video conferencing meets <br />unparalleled simplicity.
          </p>
        </div>
        <div className="flex items-center w-[457px] h-[60px] gap-[20px]">
          <button className="flex w-auto h-auto py-[16px] px-[28px] rounded-[100px] text-[#FFFFFF] bg-[#175CD3] gap-4 shadow-box">
            Start your free trial
          </button>
          <span className="flex items-center gap-[12px]">
            <img
              className="h-[20px] w-[20px]"
              src={images.Frame10}
              alt="Frame10"
            />
            <h2 className="text-[18px] leading-[28px] font-semibold text-[#175CD3]">
              Discover AI assistant
            </h2>
          </span>
        </div>
        <div>
          <img src={images.userReview} alt="userReview" />
        </div>
      </div>
      <div className="w-[584px] flex flex-col justify-center items-center  h-[488px] rounded-[16px] border-[1px]  p-[32px] gap-[40px] shadow-2xl shadow-[#10182824] bg-[#D1E9FF]">
        <div>
          <img
            className="h-[340px] w-[520px] gap-[20px]"
            src={images.hero}
            alt="hero"
          />
        </div>
        <div className="flex h-[44px] w-[344px] gap-[16px]">
          {Icons.map((item) => (
            <h2
              className="bg-[#FFFFFF] text-[#175CD3] items-center flex h-[44px] w-[44px] rounded-[100px] border-[1px] border-[#D1E9FF] p-[12px]"
              key={item.id}
            >
              {item.icon}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
