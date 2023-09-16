import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: {
        id: string
    }
}
export async function GET(request: Request, { params }: Params) {
    console.log(params.id)
    const user = await prisma.user.findFirst({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(user)
}

export async function DELETE(request: Request, { params }: Params) {
    console.log(params.id)
    const deleteUser = await prisma.user.delete({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(deleteUser)
}

export async function PUT(request: Request, { params }: Params) {
    const { income, riskProfile } = await request.json()
    console.log(params.id)
    const updateUser = await prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            id: params.id,
            income,
            riskProfile
        }
    })
    return NextResponse.json(updateUser)
}