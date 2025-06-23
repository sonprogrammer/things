'use client'
import AddModal from "@/components/AddModal";
import LoginModal from "@/components/LoginModal";
import PerPageBtn from "@/components/PerPageBtn";
import { mock } from "@/lib/mockData";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  const user = localStorage.getItem('user')

  const dataWithAddBtn = [...mock, {title: 'Add to cart', isAddBtn: true}]

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

  const handleOutsideClick = () => {
    setOpenModal(false)
  }

  const handleAddClick = () => {
    setOpenModal(true)
  }
  
  const clickPage = (title: string) => {
    router.push(`/page?title=${encodeURIComponent(title)}`)
  }
  
  if(!user){
    return(
      <div className="absolute w-full border  bg-black/70 flex items-center justify-center">
        <LoginModal />
      </div>
    )
  }

  return (
    <div className="p-10">

      <motion.div
         className="flex items-center text-3xl gap-3 justify-center"
         initial={{opacity:0, y: 120}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 1, ease: 'easeIn'}}
         >

        <motion.h1
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{duration: 1, ease: 'easeInOut'}}
        >{`Let's show our `}</motion.h1>
        <motion.h1
          drag whileDrag={{ scale: 2, color: 'orange' }}
          dragConstraints={{ left: 0, right: 100, top: 0, bottom: 0 }}
          whileHover={{color:'orange', rotate: -10}}
          className="text-3xl text-orange-400 font-bold"
        >
          J Power
        </motion.h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-5 text-center mt-10">
        {dataWithAddBtn.map((item, i) => (
          <PerPageBtn title={item.title} 
            key={i} 
            onClick={() => 
              item.isAddBtn ? handleAddClick() : clickPage(item.title)
            }/>
        ))}
      </div>
      {openModal && <AddModal outsideClick={handleOutsideClick}/>}

      
    </div>
  );
}
