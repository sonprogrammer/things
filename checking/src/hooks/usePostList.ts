import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const postList = async ({ titleId, content }: { titleId: string; content: string }) => {
    const res = await axiosInstance.post('api/postList', {titleId, content})
    return res.data
}

const usePostList = () => {
    const queryclient = useQueryClient()

    return useMutation({
        mutationFn: postList,
        onSuccess: (data,variable) => {
            queryclient.invalidateQueries({queryKey: ['todoLists', variable.titleId]})
        }
    })
}

export default usePostList