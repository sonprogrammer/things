'use client'

import { useUserStore } from "@/app/stores/useUserData"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectNoUser({children} : {children: React.ReactNode}){
    const {userData } = useUserStore()
    const router = useRouter()

    useEffect(() => {
        if(!userData){
            router.push('/')
            alert('로그인을 해주세요')
        }
    },[userData])
    return (
        <>{children}</>
    )
}