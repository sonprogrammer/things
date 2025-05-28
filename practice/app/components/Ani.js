'use client'

import React from 'react'
import { motion } from "framer-motion"

const Ani = () => {
  return (
    <div>
      <motion.div
      initial={{ opacity: 0 }} // 시작 상태
      animate={{ opacity: 1 }} // 애니메이션 도착 상태
      transition={{ duration: 0.5 }} // 시간
      className="bg-red-100 p-4 rounded-xl"
    >
      안녕하세요! ✨ 부드럽게 나타나는 컴포넌트입니다.
    </motion.div>
    </div>
  )
}

export default Ani
