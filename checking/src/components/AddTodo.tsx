
import { Button, TextField } from '@mui/material'
import React from 'react'


interface AddTodoProps{
  content: string
  handleAddTodoChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
  handleAddClick: () => void
}


const AddTodo = ({ content, handleAddTodoChange, handleAddClick}: AddTodoProps) => {
  

  return (
    <div className='flex items-center justify-center gap-10 mt-2 '>
      <TextField id="standard-basic" value={content}
                 label="what you have to do..." variant="standard" className='w-1/3'
                 onChange={handleAddTodoChange}
                  />
      <Button type="submit" variant="contained" color="primary" onClick={handleAddClick}>
        등록
      </Button>
    </div>
  )
}

export default AddTodo
