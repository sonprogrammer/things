'use client'

import PriceBtn from '@/components/PriceBtn'
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'


const feeTable: Record<string, {기본: number; 연동: number; 배송비: number}> = {
  '스마트스토어': { 기본: 3.63, 연동: 2, 배송비: 3.63 },
  '쿠팡': { 기본: 10.8, 연동: 0, 배송비: 3.3 },
  '옥션, 지마켓, 11번가': { 기본: 13, 연동: 2, 배송비: 3.3 },
}

const fees: Array<keyof typeof feeTable['스마트스토어']> = ['기본', '연동', '배송비']


const labels = [
  '매입단가',
  '배송비',
  '매입운임비(개당)',
  '판매자 부담 배송비',
];

const etc = [
  '마켓팅비용',
  '기타비용'
]

const markets = Object.keys(feeTable)

const costs = [
  {'매입단가': 0},
  {'배송비': 0},
  {'매입운임비(개당)': 0},
  {'판매자 부담 배송비': 0},
  {'마켓팅비용': 0},
  {'기타비용': 0},
]


const MainChart = () => {
  const [selectedMarket, setSelectedMarket] = useState<string>(markets[0])

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedMarket(e.target.value as string)
  }

  return (
    <div className='w-1/2 bg-gray-50 border-gray-100 border-2 p-10 shadow-2xl rounded-lg flex flex-col gap-5'>

      <div className='메인 위에쪽'>
        <div className='grid grid-cols-2 gap-4'>
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
          <div className='grid grid-cols-3 gap-4 수수료부분'>
            {fees.map(fee => (
              <div key={fee}>
                <h1>마켓 {fee} 수수료</h1>
                <PriceBtn fee={feeTable[selectedMarket][fee].toString()}/>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4 mt-5 비용'>
            {etc.map(c => (
              <div key={c}>
                <h1>{c}</h1>
                <PriceBtn />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='맨밑에 계산하기 버튼 flex justify-end w-full gap-5 mt-3'>
        <Button color="inherit" sx={{color: 'gray'}}>초기화</Button>
        <Button variant="contained" color="primary" sx={{borderRadius: '20px'}}>
          계산하기
        </Button>
      </div>

    </div>
  )
}

export default MainChart
