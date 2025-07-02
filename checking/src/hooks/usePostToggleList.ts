import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const toggleList = async({title, content}: {title:string; content: string;}) => {
    const res = await axiosInstance.post('api/postToggleList',{title, content})
    console.log('res toggle', res.data)
    return res.data
}

const usePostToggleList = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: toggleList,
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries({queryKey: ['todoLists', variable.title]})
        }
    })
}

export default usePostToggleList