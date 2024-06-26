"use client";

import React from "react";
import { motion } from "framer-motion";
// import { socials } from "../constants";
// import { navVariants } from "../utils/motion";

const Sidebar = () => {
    const socials = [

        {
            name: "linkedin",
            url: "/linkedin.svg",
            link: "https://www.linkedin.com/in/awadheshguptaofficial/",
        },
        {
            name: "email",
            url: "/mail.png",
            link: "mailto:@awadheshgupta.official@gmail.com",
        },
        {
            name: "github",
            url: "/github.png",
            link: "https://github.com/ad-gupta",
        },
    ];

    return (
        <motion.div
            // variants={slideIn("left", "tween", 0.2, 1)}
            // variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="px-3 py-8 h-full  sm:block flex justify-left  "
        >
            {/* <div className="  w-fit  inset-0 gradient-01 " /> */}
            <motion.div div className="w-full h-full flex   justify-left  gap-8" >
                {
                    socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            key={social.name}
                            rel="noreferrer"
                        >
                            <img
                                // className=""
                                
                                src={social.url}
                                alt={social.name}
                                className={social.name == 'email' ? " w-[24px] h-[24px]  hover:scale-125 transition duration-200 object-contain cursor-pointer bg-white " : " w-[24px] h-[24px]   transition duration-200 object-contain cursor-pointer hover:scale-125  "}
                            />
                        </a>
                    ))
                }
            </motion.div >
        </motion.div >)
}
    ;
export default Sidebar;
