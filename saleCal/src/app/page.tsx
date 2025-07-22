'use client'

import MainChart from "@/components/MainChart";
import TotalChart from "@/components/TotalChart";
import { usePriceStore } from "@/store/usePriceStore";



export default function Home() {

  const totalPrice = usePriceStore(state => state.totalPrice)
  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className="mb-5 text-3xl font-bold bg-red-500 px-3 py-1 rounded-lg text-white">판매가격 : {totalPrice}</h1>
      <div className="flex w-full justify-center">

      <MainChart />
      {/* <TotalChart /> */}
      </div>
    </div>
  );
}
