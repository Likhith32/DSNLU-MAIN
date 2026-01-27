import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const [rows]: any = await pool.query(
    "SELECT * FROM admins WHERE username = ? AND password = ?",
    [username, password]
  );

  if (rows.length === 0) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  // ✅ set cookie
  response.cookies.set("admin", "true", {
    httpOnly: true,
    path: "/",
  });

  return response;
}
