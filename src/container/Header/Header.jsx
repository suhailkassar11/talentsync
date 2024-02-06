import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import { images } from "../../constants";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.bgImg})` , backgroundRepeat:"no-repeat", backgroundPosition:"center"}}
      className=" md:w-auto h-[868px] px-[128px] gap-[160px] space-y-[160px] pt-[40px] left-[-36px] pb-[96px]"
    >
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
