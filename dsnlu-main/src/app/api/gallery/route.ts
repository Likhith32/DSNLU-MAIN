import { NextResponse } from 'next/server';
import pool from '@/lib/mysql';

export async function GET() {
    try {
        const [rows] = await pool.query('SELECT * FROM gallery ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, caption } = body;
        const [result] = await pool.query(
            'INSERT INTO gallery (url, caption) VALUES (?, ?)',
            [url, caption]
        );
        return NextResponse.json({ id: (result as any).insertId, ...body });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await pool.query('DELETE FROM gallery WHERE id = ?', [id]);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
