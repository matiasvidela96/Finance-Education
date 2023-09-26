import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";
export async function PUT(request) {
  const { id, perfilInversor, income } = await request.json();
  const updateUsers = await prisma.user.update({
    where: {
      id,
    },
    data: {
      riskProfile: perfilInversor,
      income: income,
    },
  });
  return NextResponse.json({
    message: "Usuario actualizado",
    id: updateUsers.id,
    perfilInversor: updateUsers.riskProfile,
    income: updateUsers.income,
  });
}

export async function GET() {
  // const id = await request.json();
  // console.log(id);
  const getUsers = await prisma.user.findMany()
  // where: {
  //   id: id,
  // },

  return NextResponse.json({
    message: "Usuario obtenido",
    getUsers,
  });
}

export async function POST(request) {
  const { id } = await request.json();
  const getUsers = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  if (!getUsers) {
    const createUser = await prisma.user.create({
      data: {
        id: id,
        riskProfile: "",
        income: 0,
      },
    });
    return NextResponse.json({
      message: "Usuario creado",
      createUser,
    });
  }

  return NextResponse.json({
    message: "Usuario ya existe",
  });
}
