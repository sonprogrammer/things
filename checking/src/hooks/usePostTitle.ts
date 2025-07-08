import {  useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from "@/lib/axiosInstance"

const postTitle = async(title: string) => {
    const res = await axiosInstance.post(`api/postTodoTitle`,{title})
    return res.data
}


const usePostTitle = () => {
    const queryclient = useQueryClient()

    return useMutation({
        mutationFn: (title: string) => postTitle(title),
        onSuccess: () => {
            queryclient.invalidateQueries({queryKey: ['todoTitle']})
        }
    })
   
}

export default usePostTitle