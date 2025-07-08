import mongodb from '@/lib/mongodb'
import User from '../../../../lib/models/User'
import { NextResponse } from 'next/server'

export async function POST(req){
    await mongodb()

    const { nickName } = await req.json()
    try {
        
        const existUser = await User.findOne({id : nickName})
        
        return NextResponse.json({available: existUser ? false : true})
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: 'error'})
    }
}