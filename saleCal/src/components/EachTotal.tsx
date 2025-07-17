import React from 'react'

interface EachTotalProps {
    result: {
        label: string
        unit: string
    }
}

const EachTotal = ({result} : EachTotalProps) => {
  return (
    <div className='relative flex-1 border-b h-16'>
      <h1 className='absolute top-2 left-0'>{result.label}</h1>
      <h1 className='absolute bottom-2 right-0'>{result.unit}</h1>
    </div>
  )
}

export default EachTotal
