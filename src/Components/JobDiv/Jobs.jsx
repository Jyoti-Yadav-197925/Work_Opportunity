import React from "react";
import { BiTimeFive } from "react-icons/bi";
import {motion} from "framer-motion";
import l1 from "../../assets/1.svg";
import l2 from "../../assets/2.svg";
import l3 from "../../assets/3.svg";
import l4 from "../../assets/4.svg";
import l5 from "../../assets/5.svg";
import l6 from "../../assets/6.svg";
import l7 from "../../assets/7.svg";
import l8 from "../../assets/8.svg";
import l9 from "../../assets/9.svg";
import l10 from "../../assets/10.svg";
import l11 from "../../assets/11.svg";
import l12 from "../../assets/12.svg";



const Data = [
  {
    id: 1,
    image: l1,
    title: "Web Developer",
    time: "Now",
    location: "Tokyo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Recruit Holdings Co., Ltd",
  },
  {
    id: 2,
    image: l2,
    title: "Software Engineer",
    time: "12Hrs",
    location: "Yokohama",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Hitachi Company",
  },
  {
    id: 3,
    image: l3,
    title: "Senior Developer",
    time: "30min",
    location: "Osaka",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Fujitsu Company",
  },
  {
    id: 4,
    image: l4,
    title: "UI/UX Developer",
    time: "30Hrs",
    location: "Hiroshima",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Advantest Company",
  },
  {
    id: 5,
    image: l5,
    title: "Machine Engineer",
    time: "Now",
    location: "Saitama",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Keyence Company ",
  },
  {
    id: 6,
    image: l6,
    title: "Software Developer",
    time: "14Hrs",
    location: "Sendai",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Canon Company",
  },
  {
    id: 7,
    image: l7,
    title: "UI/UX Developer",
    time: "2days",
    location: "Chiba",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Itochu Company",
  },
  {
    id: 8,
    image: l8,
    title: "DevOps Engineers ",
    time: "8days",
    location: "Hiroshima",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Mitsubishi Corporation",
  },
  {
    id: 9,
    image: l9,
    title: "Application Developer",
    time: "7days",
    location: "Sendai",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Mitsubishi Corporation",
  },
  {
    id: 10,
    image: l10,
    title: "Java Developer",
    time: "1Mnth",
    location: "Chiba",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Mitsui Fudosan Company",
  },
  {
    id: 11,
    image: l11,
    title: "Senior Web Developer",
    time: "24Hrs",
    location: "Kyoto",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Mizuho Company",
  },
  {
    id: 12,
    image: l12,
    title: "Senior Tester Developer",
    time: "15Hrs",
    location: "Kyoto",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id explicabo cumque assumenda tenetur eius eos repudiandae non. Unde vel inventore illum, maiores sequi totam sapiente. Corporis dolor dolores voluptas.",
    company: "Sony Company",
  },

];

function Jobs() {
  return (
    <div id="Jobs">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        

        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <motion.div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blue-950 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 30, type:"spring" }}
          >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#775f2b] ">{location}</h6>
              <p className="text-[13px]  text-[#525252]   font-normal pt-[20px] border-[gray] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="bg-gray-600 w-[30%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p -[10px] w-full text-[14px] font-semibold text-#ffff hover:bg-white group-hover/item:text-black group-hover:text-white">
                Apply Now
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;
