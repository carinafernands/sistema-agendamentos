import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRoom = async(name: string, description?: string) =>{
    return prisma.room.create({
        data: {name, description}
    });
};

export const listRooms = async () => {
    return prisma.room.findMany();
};