import mongodb from "@/lib/mongodb";
import Todo from "../../../../lib/models/Todo";
import { NextResponse } from "next/server";
import { getUserFromReq } from "../../../../lib/serverUtil/getUserFromReq";


export async function GET(req) {
  await mongodb();

  try {
    const userId = getUserFromReq(req)

    if (!userId) {
      return NextResponse.json(
        { message: "No user" },
        { status: 401 }
      );
    }

    const todoTitles = await Todo.find({ 
        userId });
        
    return NextResponse.json(
      { message: "success", todoTitles },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
