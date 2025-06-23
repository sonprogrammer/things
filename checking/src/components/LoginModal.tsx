'use client'

import { Button, TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import debounce from 'lodash/debounce';




const LoginModal = () => {
  const [nickName, setNickName] = useState<string>('')
  const [register, setRegister] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isAvailable, setIsAvailable] = useState<null | boolean>(null)


  const handleRegisterClick = () => {
    setRegister(true)
  }

  const checkName = async(nickName: string) => {
    if(!nickName.trim()){
      setIsAvailable(null)
      return
    }
    setLoading(true)
    try {
      // TODO api만들기 요청할것
      // const res = await axios.get(`api 경로`)
      // setIsAvailable
    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false)
    }
  }
  
  const debouncedCheck = useMemo(() => debounce(checkName, 1000), [])



    // TODO 아이디 디비에 있나 확인하는 요청 동안 로딩 상태 되게

    useEffect(() => {
      debouncedCheck(nickName)
      return() => {
        debouncedCheck.cancel()
      }
    },[nickName])


  return (
    <div className='border flex flex-col gap-3 p-10 rounded-3xl border-amber-500 bg-orange-200'>

      <div className='flex items-center relative justify-center' >
        {register &&
          <ArrowBackIcon
            className='absolute left-3 hover:bg-amber-700/70 cursor-pointer rounded-full w-10 text-2xl'
            onClick={() => setRegister(false)}
          />

        }
        <h1 className='text-center font-bold text-xl'>{register ? 'Register' : 'Login'}</h1>
      </div>
      <div className='flex flex-col gap-3'>

        <TextField
          // helperText="Please enter your name"
          helperText={
            loading
              ? '중복 확인 중...'
              : isAvailable === false
              ? '이미 사용 중인 이름입니다 '
              : isAvailable === true
              ? '사용 가능한 이름입니다'
              : '이름을 입력해주세요'
          }
          sx={{
            '& .MuiFormHelperText-root': {
              color:
                loading
                  ? 'gray'
                  : isAvailable === false
                  ? 'red'
                  : isAvailable === true
                  ? 'green'
                  : 'gray',
            },
          }}
          id="demo-helper-text-misaligned"
          label="Name"
          color='warning'
          onChange={(e) => setNickName(e.target.value)}
          
        />
        {register ? (
          <>
            
            <Button variant="contained" color='warning' href="#" className='h-1/2'>
              Regsiter
            </Button>
          </>
        )
          : (
            <Button variant="contained" color='warning' href="#" className='h-1/2'>
              Go In
            </Button>
          )
        }

      </div>
      {!register &&
        <p className='text-center font-light underline cursor-pointer'
          onClick={handleRegisterClick}
        >
          register</p>
      }
    </div>
  )
}

export default LoginModal
