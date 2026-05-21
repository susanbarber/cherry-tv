import { NextResponse } from "next/server";
import { mockReleases } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json(mockReleases);
}
