import mongodb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Todo from "../../../lib/models/Todo";
import { getUserFromReq } from "../../../lib/serverUtil/getUserFromReq";



export async function GET(req){
    await mongodb()

    try {
    
        const { searchParams } = new URL(req.url);

        const titleId = searchParams.get("id");
        const userId = getUserFromReq(req)    

        if(!userId){
            return NextResponse.json({message:'there is no user'}, {status: 400})
        }

        const todoLists = await Todo.find({userId,_id:titleId})

        // const newTodo = todoLists.map(t => !t.isDeleted)
        

        return NextResponse.json({ message: 'ok', todoLists}, {status:200})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'nok' },{ status: 500})
    }
}


