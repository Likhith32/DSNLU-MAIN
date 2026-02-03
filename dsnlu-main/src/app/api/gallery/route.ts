import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

// GET all carousel images
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM carousel_images ORDER BY display_order ASC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Gallery GET error:", error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

// POST - Add new carousel image
export async function POST(req: Request) {
  try {
    const { url, caption } = await req.json();

    // ✅ FIXED: Changed column names from (url, caption) to (image_url, title)
    const [result]: any = await pool.query(
      "INSERT INTO carousel_images (image_url, title) VALUES (?, ?)",
      [url, caption]
    );

    // ✅ FIXED: Return object with correct property names
    return NextResponse.json({
      id: result.insertId,
      image_url: url,  // Changed from 'url' to 'image_url'
      title: caption,  // Changed from 'caption' to 'title'
    });
  } catch (error) {
    console.error("Gallery POST error:", error);
    return NextResponse.json({ error: "Failed to add image" }, { status: 500 });
  }
}