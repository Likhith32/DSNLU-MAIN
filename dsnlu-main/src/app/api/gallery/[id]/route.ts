import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { url } = await req.json();

  await pool.query(
    "UPDATE carousel_images SET url = ? WHERE id = ?",
    [url, params.id]
  );

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await pool.query(
    "DELETE FROM carousel_images WHERE id = ?",
    [params.id]
  );

  return NextResponse.json({ success: true });
}
