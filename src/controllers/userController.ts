import { Request, Response } from "express";
import { createUser, getUsers, getUserById, deleteUser } from '../models/userModel';
import { updateUser as updateUserService } from '../services/userService';

export const addUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = await createUser({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
};

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários' });
    }
};

export const updateUserDetails = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    try {
        const updatedUser = await updateUserService(Number(id), { name, email, role });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
};

export const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await deleteUser(Number(id));
        res.status(200).json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir usuário' });
    }
};
