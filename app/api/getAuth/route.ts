import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";



export async function GET() {
    const showUser = await prisma.user.findMany()
    return NextResponse.json(showUser)
}

export async function POST(request: Request) {
    const { id, income, riskProfile } = await request.json()
    console.log('recibido en el body: ', id, income, riskProfile);
    await prisma.user.create({
        data: {
            id,
            income,
            riskProfile,
        },
    });
    return NextResponse.json({
        "message": "User created successfully",
        "id": id,
        "income": income,
        "riskProfile": riskProfile,
    })
}

