import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useValidation = (nickName: string) => {



    const login = async() => {
        if(!nickName.trim()){
            return null
        }
        const res = await axios.post(`api/postLoginUser`, {nickName})
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