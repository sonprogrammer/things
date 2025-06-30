'use client'

import ProtectNoUser from "@/components/ProtectNoUser"

export default function ProtectedLayout({children}: {children: React.ReactNode}){
    return(
        <ProtectNoUser>
            {children}
        </ProtectNoUser>
    )
}