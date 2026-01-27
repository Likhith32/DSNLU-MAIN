import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

/* ===========================
   GET – Fetch all results
=========================== */
export async function GET() {
  try {
    const [rows] = await pool.query(
      `SELECT id, title, link, is_new AS isNew, created_at
       FROM results
       ORDER BY created_at DESC`
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/* ===========================
   POST – Create result
=========================== */
export async function POST(request: Request) {
  try {
    const { title, link, isNew } = await request.json();

    if (!title || !link) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const [result]: any = await pool.query(
      `INSERT INTO results (title, link, is_new)
       VALUES (?, ?, ?)`,
      [title, link, isNew ? 1 : 0]
    );

    return NextResponse.json({
      id: result.insertId,
      title,
      link,
      isNew: isNew ?? false,
    });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/* ===========================
   PUT – Update result
=========================== */
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID required" },
        { status: 400 }
      );
    }

    const { title, link, isNew } = await request.json();

    await pool.query(
      `UPDATE results
       SET title = ?, link = ?, is_new = ?
       WHERE id = ?`,
      [title, link, isNew ? 1 : 0, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/* ===========================
   DELETE – Remove result
=========================== */
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID required" },
        { status: 400 }
      );
    }

    await pool.query(
      "DELETE FROM results WHERE id = ?",
      [id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
