import Image from "next/image";
import Box from "./components/Box";
import OneRow from "./components/OneRow";
import { motion } from 'framer-motion'
import Ani from "./components/Ani";
import FadeInUp from "./components/FadeInUp";


export default function Home() {
  return (
    <div className="text-3xl">
      <OneRow></OneRow>

      <Ani />
      <FadeInUp /> 

      
    </div>
  );
}
