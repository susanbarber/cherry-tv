import { NextResponse } from "next/server";
import { mockReleases } from "@/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const data = category
    ? mockReleases.filter((r) => r.category === category)
    : mockReleases;

  return NextResponse.json(data);
}
