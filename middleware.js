import { NextResponse } from "next/server";

// No middleware needed - all pages are public
export function middleware(req) {
  return NextResponse.next();
}
