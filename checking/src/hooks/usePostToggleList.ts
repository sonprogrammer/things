import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"



const toggleList = async({titleId, contentId, content}: {titleId:string;contentId:string; content: string;}) => {
    const res = await axiosInstance.post(`api/postToggleList`,{titleId,contentId, content})
    return res.data
}

const usePostToggleList = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: toggleList,
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries({queryKey: ['todoLists', variable.contentId]})
        }
    })
}

export default usePostToggleList