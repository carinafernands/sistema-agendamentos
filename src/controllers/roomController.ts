import { Request, Response } from "express";
import { createRoom, listRooms } from "../services/roomService";

export const addRoom = async (req: Request, res: Response) => {
    const { name, roomId } = req.body;
    try {
        const newRoom = await createRoom(name, roomId);
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar sala" });
    }
}; 

export const getRooms = async (_: Request, res: Response) => {
    try {
        const rooms = await listRooms();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar salas" });
    }
};