import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';


export const useValidation = (nickName: string) => {



    const login = async() => {
        if(!nickName.trim()){
            return null
        }
        const res = await axios.post(`${baseUrl}api/postLoginUser`, {nickName})
        if(res.data.token){
            localStorage.setItem('token', res.data.token)
        }
        return res.data
    }
    
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['login'],
        queryFn: login,
        enabled: false
    })


    return { isLoading, data, refetch}
}