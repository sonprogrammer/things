'use client'
import LoginModal from "@/components/LoginModal";
import axios from "axios";
import { useEffect } from "react";




export default function Home() {


  // const user = localStorage.getItem('user')


  // TODO api test
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get('api/getAllUser')
        console.log('res', res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])

  
  
  // if(!user){
  //   return(
  //     <div className="absolute w-full border  bg-black/70 flex items-center justify-center">
  //       <LoginModal />
  //     </div>
  //   )
  // }

  return (
    <div className="bg-black/70 h-full flex justify-center items-center">
      <LoginModal />
    </div>
  );
}
