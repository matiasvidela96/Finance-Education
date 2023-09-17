import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";
export async function PUT(request) {
  const { id, perfilInversor, income } = await request.json();
  console.log("Recibido en el Back");
  console.log(id, perfilInversor, income);

  const updateUsers = await prisma.user.update({
    where: {
      id,
    },
    data: {
      riskProfile: perfilInversor,
      income: income,
    },
  });

  return NextResponse.json(updateUsers);
}
