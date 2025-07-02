import axiosInstance from "@/lib/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const postList = async ({ title, content }: { title: string; content: string }) => {
    const res = await axiosInstance.post('api/postList', {title, content})
    return res.data
}

const usePostList = () => {
    const queryclient = useQueryClient()

    return useMutation({
        mutationFn: postList,
        onSuccess: (data,variable) => {
            queryclient.invalidateQueries({queryKey: ['todoLists', variable.title]})
        }
    })
}

export default usePostList