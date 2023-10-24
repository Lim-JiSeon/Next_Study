import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res: NextResponse) {
  new Response(JSON.stringify({ text: "hello" }), {
    status: 200,
  });
}
