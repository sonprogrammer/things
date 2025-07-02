import axiosInstance from "@/lib/axiosInstance"
import { useQuery } from '@tanstack/react-query';



const getTodoList = async(title: string) => {
    const res = await axiosInstance.get(`/api/getList?title=${encodeURIComponent(title)}`);
    return res.data.todoLists
}

const useGetTodoList = (title: string) => {
    return useQuery({
        queryKey: ['todoLists', title],
        queryFn: () => getTodoList(title),
        enabled: !!title
    })
}

export default useGetTodoList