'use client'
// import DeleteIcon from '@mui/icons-material/Delete';
import PerPageBtn from "@/components/PerPageBtn";
import { mock } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";




export default function Home() {
  const router = useRouter()
  
  const clickPage = () => {
    router.push('/page')
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

      <div className="grid grid-cols-3 gap-5 text-center mt-10">
        {mock.map((item, i) => (
          <PerPageBtn title={item.title} key={i} onClick={clickPage}/>
        ))}
        
      </div>
    </div>
  );
}
