import { Button, TextField } from '@mui/material'
import React from 'react'

const AddTodo = () => {
  return (
    <div className='flex items-center justify-center gap-10 mt-2 '>
      <TextField id="standard-basic" label="what you have to do..." variant="standard" className='w-1/3' />
      <Button type="submit" variant="contained" color="primary">
        등록
      </Button>
    </div>
  )
}

export default AddTodo
