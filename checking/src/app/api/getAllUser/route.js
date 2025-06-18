import clientPromise from '@/lib/mongodb'

export async function GET(){
    try {
        const client = await clientPromise
        const db = client.db('jecking')
        const posts = await db.collection('users').find({}).toArray()

        posts.push('hi')

        return Response.json(posts)
    } catch (error) {
        console.error("DB 연결 오류:", error);
        return new Response("서버 오류", { status: 500 });
    }
}