import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const deleteLists = async ({titleId,contentId}: {titleId: string,contentId: string}) => {
    const res = await axiosInstance.post(`api/deleteList`,{ contentId, titleId})
    return res.data
}


const useDeleteLists = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: deleteLists,
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries({queryKey: ['todoLists', variable.titleId]})
        }
    })
}

export default useDeleteLists