
import { useUserStore } from "@/app/stores/useUserData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";


export const useValidation = (nickName: string) => {

    const { userData, setUserData } = useUserStore()

    const login = async() => {
        if(!nickName.trim()){
            return null
        }
        const res = await axios.post('api/postLoginUser', {nickName})
        return res.data
    }
    
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['login'],
        queryFn: login,
        enabled: false
    })
    
    useEffect(() => {
        if(data?.exist){
            setUserData(data.user)
        }
    },[data, userData])
    return { isLoading, data, refetch}
}