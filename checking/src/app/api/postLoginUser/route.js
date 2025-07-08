import mongodb from "@/lib/mongodb";
import User from "../../../lib/models/User";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(req) {
  await mongodb();

  const {nickName} = await req.json();

  try {
    const user = await User.findOne({ id:nickName });

    if (!user) {
      return NextResponse.json(
        { message: "there is no user with that nickname", exist: false },
        { status: 200 }
      );
    }

    const token = jwt.sign(
      {id: user._id, nickName: user.nickName},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )


    return NextResponse.json(
      { message: "here you are", user,token, exist: true },
      { status: 200 }
    );
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({message:'server error'}, {status: 500})
  }
}
