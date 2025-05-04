import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

type UpdateUserData = {
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
};

export const updateUser = async (id: number, data: UpdateUserData) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};
