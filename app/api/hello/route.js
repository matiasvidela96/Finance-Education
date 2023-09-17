import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";
export async function PUT(request) {
  const { id, perfilInversor, income } = await request.json();
  console.log(id, perfilInversor, income);
  const updateUsers = await prisma.user.update({
    where: {
      id: "user_2V6xtPvpCAD71OOuD9lb3uy0cnZ",
    },
    data: {
      riskProfile: perfilInversor,
      income: income,
    },
  });
  return NextResponse.json(updateUsers);
}
