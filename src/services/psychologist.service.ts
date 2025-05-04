import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPsychologist = async (name: string, userId: number) => {
    return prisma.psychologist.create({
        data: {name, userId}
    });
};

export const listPsychologist = async () => {
    return prisma.psychologist.findMany({
        include: {user: true}
    });
};

