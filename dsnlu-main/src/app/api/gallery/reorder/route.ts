import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(req: Request) {
  const { items } = await req.json();

  for (const item of items) {
    await pool.query(
      "UPDATE carousel_images SET display_order = ? WHERE id = ?",
      [item.display_order, item.id]
    );
  }

  return NextResponse.json({ success: true });
}
