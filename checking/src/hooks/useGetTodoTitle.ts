import axiosInstance from "@/lib/axiosInstance"
import { useQuery } from "@tanstack/react-query"



const getTitle = async () => {
    const res = await axiosInstance.get(`api/getTodoTitle`)
    return res.data
}

const useGetTodoTitle = () => {
    return useQuery({
        queryKey: ['title'],
        queryFn: getTitle
    })
}

export default useGetTodoTitle