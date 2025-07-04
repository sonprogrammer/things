import jwt from 'jsonwebtoken'

export function getUserFromReq(req) {
    try {
        const authHeader = req.headers.get("authorization");
        const token = authHeader?.split(" ")[1];

        if (!token) {
            return NextResponse.json({ message: "No token" }, { status: 401 });
          }

          const secret = process.env.JWT_SECRET;
          const decoded = jwt.verify(token, secret);

          
          const userId = decoded.id;
          
          if(!userId){
              return null
            }
        return decoded.id || null;
    } catch (error) {
        console.error('jwt error', error);
        return null;
    }
}