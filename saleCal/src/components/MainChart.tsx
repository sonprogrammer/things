'use client'

import PriceBtn from '@/components/PriceBtn'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import React, { ReactNode, useState } from 'react'


const labels = [
  '판매가격',
  '매입단가',
  '배송비',
  '매입운임비(개당)',
  '판매자 부담 배송비',
];

const fees = [
  '마켓 기본 수수로',
  '마켓 연동 수수료',
  '마켓 배송비 수수료'
]

const etc = [
  '마켓팅비용',
  '기타비용'
]

const markets = ['스마트스토어', '쿠팡', '옥션, 지마켓, 11번가'];

const MainChart = () => {
  const [selectedMarket, setSelectedMarket] = useState<string>(markets[0])

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedMarket(e.target.value as string)
  }

  return (
    <div className='w-1/2 bg-gray-50 border-gray-100 border-2 p-10 shadow-2xl rounded-lg flex flex-col items-center gap-5'>

      <div className='메인 위에쪽'>
        <div className='grid grid-cols-3 gap-4'>
          {labels.map(label => (
            <div key={label}>
              <h1>{label}</h1>
              <PriceBtn />
            </div>
          ))}
        </div>
      </div>

      <div className='메인 아래쪽 flex flex-col gap-5'>

        <div className='마켓선택'>
          <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-multiple-name-label">Market</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={selectedMarket}
              onChange={handleChange}
              input={<OutlinedInput label="Market" />}
            >
              {markets.map((market) => (
                <MenuItem
                  key={market}
                  value={market}
                >
                  {market}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className='아래쪽 비용'>
          <div className='grid grid-cols-3 gap-4'>
              {fees.map(fee => (
                <div>
                  <h1>{fee}</h1>
                  <PriceBtn />
                </div>
              ))}
          </div>
          <div className='grid grid-cols-2 gap-4 mt-5'>
              {etc.map(c => (
                <div>
                  <h1>{c}</h1>
                  <PriceBtn/>
                </div>
              ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default MainChart
