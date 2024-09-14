import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { IoPulse } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
// import { animate, delay, easeInOut } from "framer-motion";
const ServiceData = [
  {
    id: 1,
    title: "web Development",
    link: "#",
    icon: <TbWorldWww />,
    deley: 0.2,
  },
  {
    id: 2,
    title: "Moble Development",
    link: "#",
    icon: <CiMobile3 />,
    deley: 0.3,
  },
  {
    id: 3,
    title: "software Development",
    link: "#",
    icon: <RiComputerLine />,
    deley: 0.4,
  },
  {
    id: 4,
    title: "Satisfied clients",
    link: "#",
    icon: <IoMdHappy />,
    deley: 0.5,
  },
  {
    id: 5,
    title: "CEO Optimization",
    link: "#",
    icon: <IoPulse />,
    deley: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    deley: 0.7,
  },
];

const SlideLeft =(delay) =>{
    return{
        initial: {
            opacity :0,
            x:50,
        },
        animate:{
            opacity:1,
            x:0,
            Transition:{
                duration:0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}
function Services() {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provided
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServiceData.map((Service) => (
            <motion.div
            variants={SlideLeft(Service.deley)} 
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="bg-[#f4f4f4] rounded-2xl flex 
            flex-col gap-4 items-center justify-center p-4 
            py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
              <div className="text-4xl mb-4">{Service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {Service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
