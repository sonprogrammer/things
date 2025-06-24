'use client'

import { Button, TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import debounce from 'lodash/debounce';




const LoginModal = () => {
  const [nickName, setNickName] = useState<string>('')
  const [gotoRegister, setGotoRegister] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isAvailable, setIsAvailable] = useState<null | boolean>(null)


  const handleGoToRegisterClick = () => {
    setGotoRegister(true)
  }
  // console.log('gotoRegister',gotoRegister)

  const checkName = async(nickName: string) => {
    if(!nickName.trim()){
      setIsAvailable(null)
      return
    }
    setLoading(true)
    try {
      // TODO api만들기 요청할것
      const res = await axios.post('/api/postCheckNickName', {nickName})
      if(res.data.available){
        setIsAvailable(true)
      }else{
        setIsAvailable(false)
      }
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


    const handleRegisterClick = async() => {
      if(!nickName.trim()){
        alert('이름을 입력하세요')
        return
      }
      if(isAvailable === false){
        alert('이미 사용중인 이름입니다')
        return
      }
      try {
        const res = await axios.post('api/postNewUser', {nickName})
        alert('회원가입 성공')
        setNickName('')
        setIsAvailable(null)
        setGotoRegister(false)
      } catch (error) {
        alert('errrooorrrr발생~~~')
        console.error(error)
      }
    }


  return (
    <div className='border flex flex-col gap-3 p-10 rounded-3xl border-amber-500 bg-orange-200'>

      <div className='flex items-center relative justify-center' >
        {gotoRegister &&
          <ArrowBackIcon
            className='absolute left-3 hover:bg-amber-700/70 cursor-pointer rounded-full w-10 text-2xl'
            onClick={() => setGotoRegister(false)}
          />

        }
        <h1 className='text-center font-bold text-xl'>{gotoRegister ? 'Register' : 'Login'}</h1>
      </div>
      <div className='flex flex-col gap-3'>

        <TextField
          helperText={
            !gotoRegister ? '' :  loading
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
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          
        />
        {gotoRegister ? (
          <>
            <Button variant="contained" color='warning' href="#" className='h-1/2' onClick={handleRegisterClick}>
              Regsiter
            </Button>
          </>
        )
          : (
            <Button variant="contained" color='warning' href="/home" className='h-1/2'>
              Go In
            </Button>
          )
        }

      </div>
      {!gotoRegister &&
        <p className='text-center font-light underline cursor-pointer'
          onClick={handleGoToRegisterClick}
        >
          register</p>
      }
    </div>
  )
}

export default LoginModal
