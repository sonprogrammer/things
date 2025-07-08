import axiosInstance from "@/lib/axiosInstance"
import { useQuery } from "@tanstack/react-query"


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';


const getTitle = async () => {
    const res = await axiosInstance.get(`${baseUrl}api/getTodoTitle`)
    return res.data
}

const useGetTodoTitle = () => {
    return useQuery({
        queryKey: ['title'],
        queryFn: getTitle
    })
}

export default useGetTodoTitle