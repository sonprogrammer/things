import mongodb from "@/lib/mongodb";
import User from "../../../lib/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  await mongodb();

  const {nickName} = await req.json();
  console.log('n', nickName)
  try {
    const user = await User.findOne({ id:nickName });

    if (!user) {
      return NextResponse.json(
        { message: "there is no user with that nickname", exist: false },
        { status: 200 }
      );
    }


    return NextResponse.json(
      { message: "here you are", user, exist: true },
      { status: 200 }
    );
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({message:'server error'}, {status: 500})
  }
}
