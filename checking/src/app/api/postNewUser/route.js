import mongodb from '@/lib/mongodb'
import User from '../../../lib/models/User'
import { NextResponse } from 'next/server'

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
            const {nickName} = await req.json()
          
            const existingUser = await User.findOne({id :nickName})
            if(existingUser){
                return NextResponse.json({message: 'id is exist'},{status: 400, headers:corsHeaders})
            }

            const newUser = new User({ id: nickName})
            await newUser.save()

            return NextResponse.json({message:'success', user: newUser}, {status: 200, headers:corsHeaders})
        } catch (error) {
            console.error('error', error)
            return NextResponse.json({ message: '서버 오류' }, { status: 500, headers: corsHeaders })

        }
    }
