import EachTotal from '@/components/EachTotal'
import React from 'react'


const results =[
  { label: "마진율 (세전)", unit: "(%)" },
  { label: "마진액 (세전)", unit: "(원)" },
  { label: "매출 합계", unit: "(원)" },
  { label: "매입 합계", unit: "(원)" },
  { label: "VAT", unit: "(원)" },
  { label: "최종 마진액 (세후)", unit: "(원)" },
]

const TotalChart = () => {
  return (
    <div className='w-1/3 bg-gray-50 border-gray-100 border-2 p-4 rounded-lg shadow-xl flex flex-col'>
      {results.map((result, i) => (
        <EachTotal key={result.label} result={result} />
      ))

      }
    </div>
  )
}

export default TotalChart
