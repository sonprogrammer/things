import mongodb from "@/lib/mongodb";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import Todo from "../../../lib/models/Todo";



export async function GET(req){
    await mongodb()

    try {
    
        const { searchParams } = new URL(req.url);

        const title = searchParams.get("title");
        const authHeader = req.headers.get("authorization");
        const token = authHeader?.split(" ")[1];
    
        if (!token) {
          return NextResponse.json({ message: "No token" }, { status: 401 });
        }
    
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        const userId = decoded.id;

        if(!userId){
            return NextResponse.json({message:'there is no user'}, {status: 400})
        }

        const todoLists = await Todo.find({userId,title})



        return NextResponse.json({ message: 'ok', todoLists}, {status:200})
        
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'nok' },{ status: 500})
    }
}


