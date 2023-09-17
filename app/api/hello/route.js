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
