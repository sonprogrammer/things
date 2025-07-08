import { create } from 'zustand'

interface UserData {
    _id: string;
    id: string;
    __v: number;
  }

interface UserState {
    userData: UserData | null
    setUserData: (data: UserData | null) => void
}

export const useUserStore = create<UserState>((set) => ({
    userData: null,
    setUserData: (data) => set({userData: data})
}))