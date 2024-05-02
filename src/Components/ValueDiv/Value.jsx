

import React from "react";
import simplicity from "../../assets/simplicity.png";
import trust from "../../assets/trust.png";
import social_goods from "../../assets/social_goods.png";

function Value() {
  return (
    <div id = "Value" className="mb-[3rem] mt-[3rem] pt-[0.5rem] pb-[2rem] bg-white">
      <h1 className="text-[#02203c] text-[25px] py-[2rem] m-[3rem] font-bold w-[100%] md:w-[400px] flex justify-center md:justify-start">
        The value that holds us accountable, keeping us true to our mission.
      </h1>
      <div className="grid gap-8 md:gap-[10rem] grid-cols-1 md:grid-cols-3 items-center justify-center ">
        <div className="singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#d4d3df]">
          <div className="flex items-center gap-1">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simplicity} alt="simplicity_logo" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            "Making things beautifully simple is at the heart of everything we do. Simplifying complexities to create elegance."
          </p>
        </div>

        <div className="singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#e7d3e7]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src={social_goods}
                alt="social_goods_logo"
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Social Goods
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            "We're dedicated to making a positive impact, one step at a time. Even the smallest change can make a difference in someone's life."
          </p>
        </div>

        <div className="singleGrid rounded-[10px] p-[1.5rem] hover:bg-[#e5e6c7]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={trust} alt="trust_logo" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Trust
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            "We build trust through authenticity and transparency, fostering lasting relationships. Our foundation lies in creating trust through openness and honesty."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Value;

