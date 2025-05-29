import { Button, TextField } from '@mui/material'
import React from 'react'


interface AddModalProps{
    outsideClick: () => void
}

const AddModal = ({outsideClick}: AddModalProps) => {
  return (
    <div className='fixed top-0 bg-black/60 flex justify-center items-center
                    inset-0'
        onClick={outsideClick}            
    >
        <div className='relative bg-white w-[30%] p-6 rounded-xl flex flex-col gap-2'
            onClick={e => e.stopPropagation()}
        >
            <p className='absolute right-6 hover:bg-gray-700 w-5 h-5 rounded-full p-3
                          flex items-center justify-center cursor-pointer hover:text-white '
               onClick={outsideClick}
            >X</p>
            <h1 className='text-center text-xl font-bold'>name of the title</h1>
            <TextField id="standard-basic" label="Title" variant="standard" /> 
            <Button variant="contained" 
            sx={{backgroundColor:'orange', "&:hover":{backgroundColor:'gray'}}}
            >Submit</Button>

        </div>
    </div>
  )
}

export default AddModal
