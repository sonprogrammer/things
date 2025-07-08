'use client'

import { useUserStore } from "@/app/stores/useUserData"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectNoUser({children} : {children: React.ReactNode}){
    const {userData, setUserData } = useUserStore()
    const router = useRouter()

    useEffect(() => {
        if(!userData){
            const storedUser = localStorage.getItem('user')
            if(storedUser){
                try {
                    const parsed = JSON.parse(storedUser)
                    setUserData(parsed)
                } catch (error) {
                    console.error('error', error)
                    localStorage.removeItem('user')
                    router.push('/')
                    alert('로그인을 다시 해주세요')
                }
            }else{
                router.push('/')
                alert('로그인을 해주세요')
            }
        }
    },[userData, setUserData, router])
    return (
        <>{children}</>
    )
}