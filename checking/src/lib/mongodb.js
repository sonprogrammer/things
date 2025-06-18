// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서는 전역 변수에 클라이언트를 캐싱하여 hot reload 문제 방지
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션에서는 글로벌 캐싱 필요 없음
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
