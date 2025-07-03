import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const deleteLists = async ({title, content}: {title: string, content: string}) => {
    const res = await axiosInstance.post('api/deleteList',{content, title})
    return res.data
}


const useDeleteLists = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: deleteLists,
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries({queryKey: ['todoLists', variable.title]})
        }
    })
}

export default useDeleteLists