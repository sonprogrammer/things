'use client'

import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  
const FadeInUp = () => {
    const[isOpen, setIsOpen] = useState(false)
    const targetRef = useRef(null);

  const scrollToBox = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      {/* <motion.div
        initial={{opacity: 0, y: 120}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='bg-blue-500 rounded-xl p-4'
      >
              부드럽게 위로 올라오며 나타납니다.
      </motion.div> */}

      <motion.div
        whileHover={{scale: 1.1}}
        transition={{type: 'spring', stiffness:300}}
        className='bg-green-500 p-4 rounded-xl inline-block'
        whileTap={{scale: 0.6, rotate: 30}}
        drag whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
        // whileFocus={{ scale: 1.2 }} href="#"
      >
        size up
      </motion.div>

    {/* <motion.ul
        variants={container}
        initial='hidden'
        animate='show'
        className='space-y-2'
    >
        {['하나', '둘', '셋', '넷'].map((text, i) => (
        <motion.li key={i} variants={item} className="bg-yellow-100 p-2 rounded">
          {text}
        </motion.li>
      ))}
    </motion.ul> */}
      
      {/* <motion.div
        initial={{x: -200, opacity: 0}}
        animate={{x:0, opacity: 1}}
        transition={{duration: 0.5}}
        className='bg-blue-200 p-3 rounded-xl'
      >
        왼쪽에서 슬라이드 인! 
      </motion.div> */}
      
      <div className="space-y-8 p-8">
      <button
        onClick={scrollToBox}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        아래 박스로 스크롤!
      </button>

      <div className="h-[1000px] bg-gray-100" />

      <div
        ref={targetRef}
        className="bg-yellow-200 p-8 rounded-xl text-center"
      >
        🎯 여기로 스크롤되었습니다!
      </div>
    </div>
      

    {/* <motion.button
        whileTap={{scale: 0.9}}
        whileHover={{scale:1.1}}
        transition={{type: 'tween', stiffness: 300}}
        className="bg-green-500 text-white px-4 py-2 rounded"
        whileTap={{rotate: 360}}
    >
        click3
    </motion.button> */}



      {/* <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        모달 열기
      </button> */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-6 rounded-xl"
          >
            <p>여기는 모달입니다!</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-400 text-white rounded"
            >
              닫기
            </button>
          </motion.div>
        )}
      </AnimatePresence> */}
    {/* </div> */}

      
    </div>
  )
}

export default FadeInUp
