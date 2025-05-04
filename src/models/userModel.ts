import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data: {name: string, email: string, password: string, role: Role}) => {
    return prisma.user.create({
        data: {
            ...data,
        },
    });
};

export const getUsers = async () =>{
    return prisma.user.findMany();
};

export const getUserById = async (id: number) => {
    return prisma.user.findUnique({
        where: {id},
    });
};

export const updateUser = async (id: number, data: {name: string, email: string, password: string, role: Role}) => {
    return prisma.user.update({
        where: { id },
        data: {... data},
    });
};

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: { id }
    });
};