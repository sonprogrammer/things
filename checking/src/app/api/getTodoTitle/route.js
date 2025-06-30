import mongodb from "@/lib/mongodb";
import Todo from "../../../lib/models/Todo";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

export async function GET(req) {
  await mongodb();

  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    console.log('secret', decoded)

    const userId = decoded.id;
    console.log('userid', userId)

    const todoTitles = await Todo.find({ 
        userId });
    console.log('todos', todoTitles)

    return NextResponse.json(
      { message: "success", todoTitles },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
