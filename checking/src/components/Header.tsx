'use client'

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/app/stores/useUserData';


// TODO 로그아웃 확인창 없이 진행
const Header = () => {
  const { userData, setUserData} = useUserStore()
  // console.log('userdata', userData)
  const router = useRouter()

  
  const handleLogoutClick = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUserData(null)
    router.push('/')
  }
  

  return (
    // TODO 배경색 바꾸기
    <div className='bg-gradient-to-tl from-blue-950 to-blue-300 py-5 flex items-center justify-center'>
      <Link href={'/home'} className='flex items-center gap-3'>
        <motion.h1
          initial={{ color: 'white' }}
          whileHover={{ scale: 1.2, rotate: 30, color: 'orange' }}
          transition={{
            color: { duration: 1.5 },
            scale: { type: 'spring', stiffness: 300 },
            rotate: { type: 'spring', stiffness: 300 },
          }}
          className='font-bold text-[36px]'>
          J
        </motion.h1>
        <h1 className='text-white font-black hover:text-orange-300'>ecking</h1>
      </Link>
      {userData &&
      <FontAwesomeIcon 
      onClick={handleLogoutClick}
      icon={faRightFromBracket} className='absolute right-5 text-3xl text-orange-300 cursor-pointer' />
    }

    </div>
  )
}

export default Header
