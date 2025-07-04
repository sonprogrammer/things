import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
import { getUserFromReq } from "../../../lib/serverUtil/getUserFromReq";


export async function POST(req){
    await mongodb()

    try {
        const {title, content} = await req.json()
        const userId = getUserFromReq(req)

        const todoTitle = await Todo.findOne({title,userId})
        
        todoTitle.tasks.push({text:content })
        await todoTitle.save()
        
        return NextResponse.json({message:'ok'}, {status:200})
        
    } catch (error) {
        console.log('errror', error)
        return NextResponse.json({message:'nok'}, {status:500})
    }
}