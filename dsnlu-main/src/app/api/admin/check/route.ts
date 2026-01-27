import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const isAdmin = request.headers
    .get("cookie")
    ?.includes("admin=true");

  return NextResponse.json({ isAdmin: !!isAdmin });
}
