import mongodb from "@/lib/mongodb";
import User from "../../../lib/models/User";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


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


export async function POST(req) {
  await mongodb();

  const {nickName} = await req.json();

  try {
    const user = await User.findOne({ id:nickName });

    if (!user) {
      return NextResponse.json(
        { message: "there is no user with that nickname", exist: false },
        { status: 200, headers: corsHeaders }
      );
    }

    const token = jwt.sign(
      {id: user._id, nickName: user.nickName},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )


    return NextResponse.json(
      { message: "here you are", user,token, exist: true },
      { status: 200, headers:corsHeaders }
    );
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({message:'server error'}, {status: 500, headers:corsHeaders})
  }
}
