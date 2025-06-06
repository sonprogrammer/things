'use client'
import AddModal from "@/components/AddModal";
import PerPageBtn from "@/components/PerPageBtn";
import { mock } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";




export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  const dataWithAddBtn = [...mock, {title: 'Add to cart', isAddBtn: true}]

  const handleOutsideClick = () => {
    setOpenModal(false)
  }

  const handleAddClick = () => {
    setOpenModal(true)
  }
  
  const clickPage = (title: string) => {
    router.push(`/page?title=${encodeURIComponent(title)}`)
  }
  
  return (
    <div className="">

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
        >{`Let's show our power`}</motion.h1>
        <motion.h1
          drag whileDrag={{ scale: 2, color: 'orange' }}
          dragConstraints={{ left: 0, right: 100, top: 0, bottom: 0 }}
          whileHover={{color:'orange', rotate: -30}}
          className="text-3xl"
        >
          J
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
