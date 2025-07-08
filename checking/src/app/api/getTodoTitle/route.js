import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
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
export async function GET(req) {
  await mongodb();

  try {
    const userId = getUserFromReq(req)

    if (!userId) {
      return NextResponse.json(
        { message: "No user" },
        { status: 401, headers:corsHeaders }
      );
    }

    const todoTitles = await Todo.find({ 
        userId });
        
    return NextResponse.json(
      { message: "success", todoTitles },
      { status: 200, headers:corsHeaders }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500, headers:corsHeaders });
  }
}
