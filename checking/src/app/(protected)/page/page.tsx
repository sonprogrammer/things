'use client'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from '@/components/AddTodo';
import useGetTodoList from '@/hooks/useGetTodoList';
import usePostToggleList from '@/hooks/usePostToggleList';
import usePostList from '@/hooks/usePostList';


interface Todos  {
  text: string;
  done: boolean
}


const PerPage = () => {
  const [todos, setTodos] = useState<Todos[]>([])
  const [content, setContent] = useState<string>('')

  const params = useSearchParams()
  const title = params.get('title') ?? ''

  const { data } = useGetTodoList(title)

  const {mutate: toggleMutate} = usePostToggleList()
  const {mutate} = usePostList()

  const handleAddClick = () => {
    mutate({title, content})
    setContent('')
  }

  useEffect(() => {
    if(data && data.length >0){
      setTodos(data[0]?.tasks)
    }
  },[data])
  

  const handleAddTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)

  }



  const toggleTodo = (text: string) => {
    toggleMutate({title,content: text})
    setTodos(prev => prev.map((todo) => 
      todo.text === text ? {...todo, done: !todo.done} : todo
  ))
  }

  const handleDelete = (text: string, e:React.MouseEvent<HTMLButtonElement>) => {
    setTodos(prev => prev.filter(a => a.text !== text))
    e.stopPropagation()
  }
 

  return (
    <div className='relative h-full'>
      <div className='flex items-center justify-between border-b-2'>
        <div className='font-bold text-2xl p-3'>{title}</div>
        <Button variant="contained" sx={{ marginRight: '12px', borderRadius: '24px' }}>Save</Button>
      </div>
      <AddTodo content={content} handleAddTodoChange={handleAddTodoChange} handleAddClick={handleAddClick}/>
      <div className='p-5 grid md:grid-cols-2 grid-cols-1 gap-5'>

        <div className='todo'>

          <div className='flex items-center justify-center relative border-b-[1px] pb-2 '>

            <h1 className='mx-auto mb-2 font-semibold text-xl px-3 border-2 rounded-full bg-purple-300'>
              Todo
            </h1>
            

          </div>

          <FormGroup className='input'>
            {todos?.filter(a => !a.done ).map((a, i) => (
              <FormControlLabel key={i}
                control={<Checkbox
                  checked={!todos.includes(a)}
                  onChange={() => toggleTodo(a.text)}
                />}
                label={a.text} 
                />
            ))}
          </FormGroup>
        </div>

        <div className='끝낸거'>
          <div className='pb-2 border-b-[1px]'>
            <h1 className='mx-auto mb-2 w-fit font-semibold  text-xl px-3 border-2 rounded-full bg-gray-400'>Done</h1>

          </div>
          <div>
            {todos?.filter(a => a.done).map((a, i) => (
              <div className='flex items-center justify-between cursor-pointer' key={i}  >
                <div className='flex items-center' onClick={()=>toggleTodo(a.text)}>
                  <Checkbox checked />
                  <p className='line-through text-gray-500'>{a.text}</p>
                </div>
                <IconButton aria-label="delete"  onClick={(e)=>handleDelete(a.text, e)}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}

export default PerPage

