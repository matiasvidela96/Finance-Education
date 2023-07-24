import { NextResponse } from "next/server"
export async function GET(request: Request) {
    const data = await fetch("https://www.freetogame.com/api/games");
    const response = await data.json();
    return NextResponse.json(response);
}