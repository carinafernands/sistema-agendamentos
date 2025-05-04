import { Request, Response } from "express";
import { createMassageTherapist, listMassageTherapist} from "../services/massageService";

export const addMassage = async (req: Request, res: Response) => {
    const { name, userId } = req.body;
    try {
        const newMassage = await createMassageTherapist(name, userId);
        res.status(201).json(newMassage);
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar massagista" });
    }
}; 

export const getMassages = async (_: Request, res: Response) => {
    try {
        const massages = await listMassageTherapist();
        res.status(200).json(massages);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar massagistas" });
    }
};