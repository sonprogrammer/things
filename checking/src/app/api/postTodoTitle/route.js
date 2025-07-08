import Todo from "../../../lib/models/Todo";
import mongodb from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import User from '../../../lib/models/User'
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
        const { title } = await req.json()
        const userId = getUserFromReq(req)

        if (!userId) {
            return NextResponse.json({ message: 'No token provided' }, { status: 401, headers:corsHeaders });
          }
        
        

        const user = await User.findOne({_id: userId})

        if(!user){
            return NextResponse.json({message:'not found user'}, {status: 400, headers:corsHeaders})
        }

        const newTodo = new Todo({
            title,
            userId: user._id
        })
        await newTodo.save()

        return NextResponse.json({message:'todo created', todo:newTodo}, {status: 200, headers:corsHeaders})

    } catch (error) {
        console.error('Server error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500, headers:corsHeaders });
    }

}