'use client'

import { mock } from '@/lib/mockData'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Button, TextareaAutosize } from '@mui/material';


const PerPage = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [addItem, setAddItem] = useState<boolean>(false)
  const params = useSearchParams()
  const title = params.get('title')

  const objects = mock.filter(item => item.title === title)
  console.log('cha', checkedItems)

  const handleChange = (item: string) => {
    setCheckedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleAddClick =() => {
    setAddItem(true)
  }

  return (
    <div className='relative h-full'>
      <div className='font-bold text-2xl p-3'>{title}</div>
      <div className='p-5 border-t-2 grid md:grid-cols-2 grid-cols-1 gap-5'>
        
        <div className='todo'>

          <div className='flex items-center justify-center relative border-b-[1px] pb-2 '>

            <h1 className='mx-auto mb-2 font-semibold text-xl px-3 border-2 rounded-full bg-purple-300'>
              Todo
            </h1>
            <Button variant="contained" sx={{position:'absolute', right:'10px'}} onClick={handleAddClick}>
              Add
            </Button>

          </div>

          <FormGroup>
            {objects[0].items.map((a, i) => (
              <FormControlLabel key={i}
                control={<Checkbox
                  checked={checkedItems.includes(a)}
                  onChange={() => handleChange(a)}
                />}
                label={a} />
            ))}
            {addItem && 
              <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <TextareaAutosize
                placeholder="Try to submit with no text!"
                required
                sx={{ mb: 1 }}
              />
              <Button type="submit">Submit</Button>
            </form>
            }
          </FormGroup>
        </div>

        <div className='끝낸거'>
          <div className='pb-2 border-b-[1px]'>
            <h1 className='mx-auto mb-2 w-fit font-semibold  text-xl px-3 border-2 rounded-full bg-gray-400'>Done</h1>

          </div>
          <div>
            {checkedItems.map((a, i) => (
              <div className='flex items-center' key={i}>
                <Checkbox disabled checked />
                <p>{a}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}

export default PerPage
