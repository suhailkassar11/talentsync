import React from "react";
import { images } from "../constants";

const navItems = ["Products", "Solutions", "Resources", "Pricing"];

const Navbar = () => {
  return (
    <div className="flex md:w-auto w-[1472px] h-[84px] py-[16px] px-[32px] items-center justify-between border-[1px] rounded-[100px] bg-[#F2F4F7] border-[#D0D5DD]">
      <div className="flex gap-[10px] items-center">
        <img className="w-[25.38px] h-[28px]" src={images.Group} alt="group" />
        <span className="text-2xl font-semibold text-[#101828]">ClearLink</span>
      </div>
      <div className="flex gap-[40px]">
        {navItems.map((items, index) => {
          if (items !== "Pricing") {
            return <div key={index} className="flex cursor-pointer items-center gap-[6px]">
                <span className="text-[#667085]">{items}</span>
                <img className="h-[18px] w-[18px]" src={images.chevron} alt="arrowdown" />
                </div>;
          }
          return <div key={index} className="flex cursor-pointer items-center gap-[6px]">
          <span className="text-[#667085]">{items}</span>
          </div>;
        })}
      </div>
      <div className="flex gap-[8px]">
        <button className=" text-[16px] font-semibold w-[144px] h-[52px] border-[1px] rounded-[100px] bg-[#FFFFFF] text-[#101828] py-[14px] px-[24px]">
            Talk to Sales
        </button>
        <button className="font-semibold text-[#FFFFFF] w-[167px] h-[52px] text-[16px] border-[1px] rounded-[100px] bg-[#175CD3] py-[14px] px-[24px]">
            Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
