'use client'

import { mock } from '@/lib/mockData'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from '@/components/AddTodo';


const PerPage = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [addItem, setAddItem] = useState<boolean>(false)
  const params = useSearchParams()
  const title = params.get('title')

  const objects = mock.filter(item => item.title === title)[0]
  console.log('cha', checkedItems)

  const handleChange = (item: string) => {
    setCheckedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

 

  return (
    <div className='relative h-full'>
      <div className='flex items-center justify-between border-b-2'>
        <div className='font-bold text-2xl p-3'>{title}</div>
        <Button variant="contained" sx={{ marginRight: '12px', borderRadius: '24px' }}>Save</Button>
      </div>
      <AddTodo />
      <div className='p-5 grid md:grid-cols-2 grid-cols-1 gap-5'>

        <div className='todo'>

          <div className='flex items-center justify-center relative border-b-[1px] pb-2 '>

            <h1 className='mx-auto mb-2 font-semibold text-xl px-3 border-2 rounded-full bg-purple-300'>
              Todo
            </h1>
            

          </div>

          <FormGroup className='input'>
            {objects.items.filter(a => !checkedItems.includes(a)).map((a, i) => (
              <FormControlLabel key={i}
                control={<Checkbox
                  checked={checkedItems.includes(a)}
                  onChange={() => handleChange(a)}
                />}
                label={a} />
            ))}
          </FormGroup>
        </div>

        <div className='끝낸거'>
          <div className='pb-2 border-b-[1px]'>
            <h1 className='mx-auto mb-2 w-fit font-semibold  text-xl px-3 border-2 rounded-full bg-gray-400'>Done</h1>

          </div>
          <div>
            {checkedItems.map((a, i) => (
              <div className='flex items-center justify-between' key={i}>
                <div className='flex items-center'>
                  <Checkbox disabled checked />
                  <p>{a}</p>
                </div>
                <IconButton aria-label="delete">
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
