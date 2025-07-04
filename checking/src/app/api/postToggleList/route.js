import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
import { getUserFromReq } from "../../../lib/serverUtil/getUserFromReq";

export async function POST(req){
    await mongodb()

    try {
        const { title, content} = await req.json()
        const userId = getUserFromReq(req)

        const TodoTitle = await Todo.findOne({title, userId})
        const todoTasks = TodoTitle.tasks

        todoTasks.forEach(task => {
            if(task.text === content){
                task.done = !task.done
            }
        })
        await TodoTitle.save()

        return NextResponse.json({message: 'ok'} , {status: 200})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({message: 'ok'} , {status: 500})
    }
}