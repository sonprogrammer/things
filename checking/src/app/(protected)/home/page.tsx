'use client'
import AddModal from "@/components/AddModal";
import PerPageBtn from "@/components/PerPageBtn";
import useDeleteTitle from "@/hooks/useDeleteTitle";
import useGetTodoTitle from "@/hooks/useGetTodoTitle";
import EditIcon from '@mui/icons-material/Edit';
import { motion } from "framer-motion";
import SaveIcon from '@mui/icons-material/Save';
import { useRouter } from "next/navigation";
import { useState } from "react";





export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  const router = useRouter()

  const { data } = useGetTodoTitle()

  const {mutate: deleteTitle} = useDeleteTitle()

  const titles = data?.todoTitles || []

  const dataWithAddBtn = [...titles, { title: 'Add to cart', isAddBtn: true }]

  console.log('data', dataWithAddBtn)

  const handleOutsideClick = () => {
    setOpenModal(false)
  }

  const handleAddClick = () => {
    setOpenModal(true)
  }

  const handleDeleteClick = (title: string) => {
    deleteTitle(title)
  }

  const clickPage = (title: string) => {
    router.push(`/page?title=${encodeURIComponent(title)}`)
  }

  return (
    <div className="p-10">

      <motion.div
        className="flex items-center text-3xl gap-3 justify-center"
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >

        <motion.h1
          drag whileDrag={{ scale: 2, color: 'orange' }}
          dragConstraints={{ left: 0, right: 100, top: 0, bottom: 0 }}
          whileHover={{ color: 'orange', rotate: -10 }}
          className="text-3xl text-orange-400 font-bold"
        >
          J Power
        </motion.h1>

      </motion.div>

      <div className=" absolute right-12 top-33 cursor-pointer hover:bg-black p-2 rounded-full"
           onClick={()=> setEdit(!edit)}
      >
          {edit ? <SaveIcon className="text-blue-500"/> : <EditIcon className="text-red-500" />}
      </div>
      

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-5 text-center mt-10">
        {dataWithAddBtn.filter(item => !item.isDeleted).map((item, i) => (
          <PerPageBtn title={item.title} edit={edit}
            key={i}
            handleDeleteClick={handleDeleteClick}
            onClick={() =>
              item.isAddBtn ? handleAddClick() : clickPage(item.title)
            } 

            />
        ))}
      </div>

      
      {openModal && <AddModal outsideClick={handleOutsideClick} />}


    </div>
  );
}
