import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongodb()

    try {
        const { title, content} = await req.json()
        console.log('title', title, content)

        const TodoTitle = await Todo.findOne({title})
        // console.log('todo', TodoTitle)

        const todoTasks = TodoTitle.tasks

        todoTasks.forEach(task => {
            if(task.text === content){
                task.done = !task.done
            }
        })
        await TodoTitle.save()
        console.log('todotask', todoTasks)

        return NextResponse.json({message: 'ok'} , {status: 200})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({message: 'ok'} , {status: 500})
    }
}