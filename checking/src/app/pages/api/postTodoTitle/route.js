import Todo from "../../../../lib/models/Todo";
import mongodb from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import User from '../../../../lib/models/User'
import { getUserFromReq } from "../../../../lib/serverUtil/getUserFromReq";



export async function POST(req){
    await mongodb()

    try {
        const { title } = await req.json()
        const userId = getUserFromReq(req)

        if (!userId) {
            return NextResponse.json({ message: 'No token provided' }, { status: 401 });
          }
        
        

        const user = await User.findOne({_id: userId})

        if(!user){
            return NextResponse.json({message:'not found user'}, {status: 400})
        }

        const newTodo = new Todo({
            title,
            userId: user._id
        })
        await newTodo.save()

        return NextResponse.json({message:'todo created', todo:newTodo}, {status: 200})

    } catch (error) {
        console.error('Server error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }

}