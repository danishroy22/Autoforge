import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "results.json");
    const raw = await readFile(filePath, "utf-8");
    const data = JSON.parse(raw);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Could not load results.json" },
      { status: 500 }
    );
  }
}
