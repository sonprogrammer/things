import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongodb()

    try {
        const { title } = await req.json()

        const todoTitle = await Todo.findOne({title})

        if(!todoTitle){
            return NextResponse.json({message:'there is no title'}, {status: 400})
        }

        console.log("todotitle", todoTitle)
        todoTitle.isDeleted = true

        await todoTitle.save()

        return NextResponse.json({message:'ok'}, {status:200})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({message:'Nok'}, {status:500})
    }
}