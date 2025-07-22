'use client'

import PriceBtn from '@/components/PriceBtn'
import { usePriceStore } from '@/store/usePriceStore';
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


const profitRates = ['5%', '10%', '15%', '20%', '25%', '30%', '35%']

const MainChart = () => {
  const [selectedMarket, setSelectedMarket] = useState<string>(markets[0])
  const [costs, setCosts] = useState<Record<string, number>>({
    '매입단가': 0,
    '배송비': 0,
    '매입운임비(개당)' : 0,
    '판매자 부담 배송비' : 0,
    '마켓팅비용' : 0,
    '기타비용' : 0
  })
  const [profit, setProfit] = useState<string>('5%')
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const setTotal = usePriceStore((state) => state.setTotalPrice)

  setTotal(totalPrice)

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedMarket(e.target.value as string)
  }

  const handleCalculate = () => {
    const totalCost =
      costs['매입단가'] +
      costs['배송비'] +
      costs['매입운임비(개당)'] +
      costs['판매자 부담 배송비'] +
      costs['마켓팅비용'] +
      costs['기타비용']
  
    const fee = feeTable[selectedMarket]
    const marketFeeRate = (fee.기본 + fee.연동 + fee.배송비) / 100
  
    const marginRate = parseFloat(profit.replace('%', '')) / 100
  
    const salePrice = totalCost / (1 - marginRate - marketFeeRate)
  
    setTotalPrice(Math.round(salePrice))
  }

  const handleReset = () => {
    setCosts({
      '매입단가': 0,
      '배송비': 0,
      '매입운임비(개당)': 0,
      '판매자 부담 배송비': 0,
      '마켓팅비용': 0,
      '기타비용': 0,
    })
    setTotalPrice(0)
  }

  return (
    <div className='w-1/2 bg-gray-50 border-gray-100 border-2 p-10 shadow-2xl rounded-lg flex flex-col gap-5'>

      <div className='메인 위에쪽'>
        <div className='grid grid-cols-2 gap-4'>
          {labels.map(label => (
            <div key={label}>
              <h1>{label}</h1>
              <PriceBtn 
                value={costs[label]}
                onChange={(val) => setCosts(prev=> ({...prev, [label]: val}))}
              />
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

          <div className='grid grid-cols-2 gap-4 mt-5 기타비용'>
            {etc.map(c => (
              <div key={c}>
                <h1>{c}</h1>
                <PriceBtn 
                  value={costs[c]}
                  onChange={(val) => setCosts(prev => ({...prev, [c]: val}))}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='마진율 선택'>
          <FormControl sx={{m: 1, width: '50%'}}>
            <InputLabel id="demo-multiple-name-label">마진율</InputLabel>
            <Select
              labelId='demo-multiple-name-label'
              id='demo-multiple-name'
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
            >
              {profitRates.map(rate => (
                <MenuItem key={rate} value={rate}>
                  {rate}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
      </div>

      <div className='맨밑에 계산하기 버튼 flex justify-end w-full gap-5 mt-3'>
        <Button color="inherit" sx={{color: 'gray'}} onClick={handleReset}>초기화</Button>
        <Button onClick={handleCalculate} variant="contained" color="primary" sx={{borderRadius: '20px'}}>
          계산하기
        </Button>
      </div>

    </div>
  )
}

export default MainChart
