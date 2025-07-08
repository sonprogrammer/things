'use client'

import ProtectNoUser from "@/components/ProtectNoUser"
import { Suspense } from "react"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProtectNoUser>
                {children}
            </ProtectNoUser>
        </Suspense>
    )
}