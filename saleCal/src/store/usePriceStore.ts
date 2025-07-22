import { create } from "zustand";

interface PirceStore {
    totalPrice: number
    setTotalPrice : (price:number) => void
}

export const usePriceStore = create<PirceStore>((set) => ({
    totalPrice: 0,
    setTotalPrice: (price) => set({totalPrice: price})
}))