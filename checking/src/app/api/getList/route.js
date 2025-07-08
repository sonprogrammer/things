import mongodb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Todo from "../../../lib/models/Todo";
import { getUserFromReq } from "../../../lib/serverUtil/getUserFromReq";


const corsHeaders = {
    "Access-Control-Allow-Origin": "https://things-tan.vercel.app", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
  
  export async function OPTIONS() {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

export async function GET(req){
    await mongodb()

    try {
    
        const { searchParams } = new URL(req.url);

        const titleId = searchParams.get("id");
        const userId = getUserFromReq(req)    

        if(!userId){
            return NextResponse.json({message:'there is no user'}, {status: 400, headers:corsHeaders})
        }

        const todoLists = await Todo.find({userId,_id:titleId})

        // const newTodo = todoLists.map(t => !t.isDeleted)
        

        return NextResponse.json({ message: 'ok', todoLists}, {status:200, headers: corsHeaders})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'nok' },{ status: 500, headers:corsHeaders})
    }
}


