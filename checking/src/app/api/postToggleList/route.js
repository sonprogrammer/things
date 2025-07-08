import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
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
export async function POST(req){
    await mongodb()

    try {
        const {  titleId, contentId, content} = await req.json()
        const userId = getUserFromReq(req)

        const TodoTitle = await Todo.findOne({_id:titleId, userId})
        const task = TodoTitle.tasks.find(t => t._id.toString() === contentId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
          }

          if (task.text === content) {
            task.done = !task.done;
          }
        await TodoTitle.save()

        return NextResponse.json({message: 'ok'} , {status: 200,headers:corsHeaders})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({message: 'ok'} , {status: 500, headers: corsHeaders})
    }
}