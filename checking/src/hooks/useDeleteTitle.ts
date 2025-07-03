import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"




const deleteTitle = async(title: string) => {
    const res = await axiosInstance.post('api/deleteTitle', {title})
    return res.data
}


const useDeleteTitle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteTitle,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['title']})
        }
    })
}

export default useDeleteTitle