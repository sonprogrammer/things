import mongodb from '@/lib/mongodb'
import User from '../../../lib/models/User'
import { NextResponse } from 'next/server'



export async function POST(req){
    await mongodb()
    
        try {
            const {nickName} = await req.json()
          
            const existingUser = await User.findOne({id :nickName})
            if(existingUser){
                return NextResponse.json({message: 'id is exist'},{status: 400})
            }

            const newUser = new User({ id: nickName})
            await newUser.save()

            return NextResponse.json({message:'success', user: newUser}, {status: 200})
        } catch (error) {
            console.error('error', error)
            return NextResponse.json({ message: '서버 오류' }, { status: 500 })

        }
    }
