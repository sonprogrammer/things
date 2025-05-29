'use client'

import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {motion} from 'framer-motion'

import React from 'react'

const MotionIconButton = motion(IconButton);

interface PerPageProps{
  title: string
  onClick?: () => void
}

const PerPageBtn = ({title, onClick}: PerPageProps) => {
  return (
    <div className='hi'>
      <MotionIconButton
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.5}}
          transition={{type:'spring', stiffness: 300}}
          onClick={onClick}
           color="primary" aria-label="add to shopping cart" 
          className=" !border-4 border-blue-300 hover:!bg-blue-200/70 !rounded-md !p-3 w-[270px] md:!w-[230px] lg:!w-[320px] !py-7"

      >
        { title !== 'Add to cart' ?
          <p className='ml-2'>{title}</p>
          :
          <div className='flex gap-2 items-center justify-center'>
          <AddShoppingCartIcon />
          <p>{title}</p>
          </div>
        }
      </MotionIconButton>
    </div>
  )
}

export default PerPageBtn
