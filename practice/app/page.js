'use client'

import Image from "next/image";
import Box from "./components/Box";
import OneRow from "./components/OneRow";
import { motion } from 'framer-motion'
import Ani from "./components/Ani";
import FadeInUp from "./components/FadeInUp";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const inputRef = useRef(null)
  const renderCount = useRef(1)
  const [count, setCount] = useState(0)
  const topRef = useRef(null)


  const handleGoToTop = () => {
    if(topRef.current){

      topRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }


  useEffect(() => {
    renderCount.current += 1
  },[])

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="text-3xl" ref={topRef}>
      {/* <OneRow></OneRow>

      <Ani />
      <FadeInUp />  */}

    <div>
      <p>현재 count(state): {count}</p>
      <p>이전 count(useRef): {renderCount.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>

      <div>
        <input ref={inputRef} type="text" placeholder="type your name"></input>
        <button onClick={handleClick}>focus</button>
        <div>렌더링 횟수: {renderCount.current}</div>
      </div>

      <div className="h-[700px]">
        df
      </div>


      <button onClick={handleGoToTop}>go to top</button>
      
    </div>
  );
}
