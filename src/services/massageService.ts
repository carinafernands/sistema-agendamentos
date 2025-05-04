import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMassageTherapist = async (name: string, userId: number) => {
    return prisma.massageTherapist.create({
        data: {name, userId}
    });
};

export const listMassageTherapist = async () => {
    return prisma.massageTherapist.findMany({
        include: {user: true}
    });
};
