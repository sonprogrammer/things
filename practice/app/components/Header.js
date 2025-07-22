'use client'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import {
  faBars,
  faBellConcierge,
  faFan,
  faMagnifyingGlass,
  faSquareH,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

const searchBoxVariants = {
    hidden: { opacity: 0, y: -130, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <div className="bg-gray-100 sticky top-0 w-full z-10">
      <div className=" flex justify-between px-3 items-center">
        <img
          src="./alogo.png"
          className="w-[120px] cursor-pointer"
          alt="logo"
        />
        <div className="flex gap-10 flex-2 justify-center">
          <div className="flex items-center gap-2 font-semibold cursor-pointer">
            <FontAwesomeIcon icon={faSquareH} className="w-[42px]" />
            <h2>숙소</h2>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            <FontAwesomeIcon icon={faFan} className="w-[42px] cursor-pointer" />
            <h2>체험</h2>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            <FontAwesomeIcon icon={faBellConcierge} className="w-[42px] cursor-pointer" />
            <h2>서비스</h2>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-200 w-[50px] h-[50px] rounded-full text-center hover:bg-gray-300
            hover:scale-110 transition duration-300 ease-in-out  cursor-pointer
        ">
            <FontAwesomeIcon icon={faBars} className="w-[20px]" />
        </div>

      </div>

      <AnimatePresence>

    {/* {!isScrolled && 

    <motion.div
    className={`여행지 선택 flex bg-amber-200 justify-center items-center p-5`}
    initial='hidden'
    animate='visible'
    exit='hidden'
    variants={searchBoxVariants}
    transition={{duration: 0.5, ease: 'easeInOut'}}
  >
        
    
        <div className="flex border-[1px] items-center bg-white border-gray-400 rounded-full w-[60%] drop-shadow-xl">
         
          <div className="flex-1 pl-5 flex flex-col h-full justify-center hover:bg-gray-100 hover:rounded-full py-5 ">
            <h1>여행지</h1>
            <p className="text-gray-500">여행지 검색</p>
          </div>

          <div className="구분선 h-12 w-[1px] bg-gray-300" />

          <div className="flex-1 pl-5 flex flex-col justify-center hover:bg-gray-100 hover:rounded-full  py-5">
            <h1>날짜</h1>
            <p className="text-gray-500">날짜 추가</p>
          </div>

          <div className="구분선 h-12 w-[1px] bg-gray-300" />

          <div className="flex-1 pl-5 flex flex-col justify-center hover:bg-gray-100 hover:rounded-full  py-5">
            <h1>여행자</h1>
            <p className="text-gray-500">게스트 추가</p>
          </div>

          <div className="search cursor-pointer bg-pink-600 w-[60px] h-[60px] rounded-full flex justify-center items-center text-white mr-3 hover:bg-pink-800/80">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[20px]" />
          </div>

        </div>
      </motion.div>

      } */}
            </AnimatePresence>
    </div>
  );
};

export default Header;
