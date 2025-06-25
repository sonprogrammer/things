import { create } from 'zustand'

interface UserState {
    userData: any
    setUserData: (data: any) => void
}

export const useUserStore = create<UserState>((set) => ({
    userData: null,
    setUserData: (data) => set({userData: data})
}))