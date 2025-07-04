import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
import { getUserFromReq } from "../../../lib/serverUtil/getUserFromReq";


export async function POST(req){
    await mongodb()

    try {
        const { title, content} = await req.json()

        const userId = getUserFromReq(req)

        const todoTitle = await Todo.findOne({title, userId})

        if(!todoTitle){
            return NextResponse.json({message:'there is no title'}, {status:400})
        }

        const tasks = todoTitle.tasks.find(t=> t.text === content)
        tasks.isDeleted = true

        await todoTitle.save()
    
        return NextResponse.json({message:'ok'}, {status:200})
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({message:'Nok'}, {status:500})
    }
}