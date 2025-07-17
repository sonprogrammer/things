import MainChart from "@/components/MainChart";
import TotalChart from "@/components/TotalChart";



export default function Home() {
  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1>판매가격 : </h1>
      <div className="flex w-full justify-center">

      <MainChart />
      <TotalChart />
      </div>
    </div>
  );
}
