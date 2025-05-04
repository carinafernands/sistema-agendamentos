import { Request, Response } from "express";
import { createPsychologist, listPsychologist }  from "../services/psychologistService";

export const addPsychologist = async (req: Request, res: Response) => {
    const {name, userId } = req.body;
    try{
        const newPsychologist = await createPsychologist(name, userId);
        res.status(201).json(newPsychologist);
    }catch(error){
        res.status(500).json({message: "Erro ao cadastrar psicólogo"})
    }
};

export const getPsychologist = async (req: Request, res: Response) => {
    try{
        const psychologists = await listPsychologist();
        res.status(200).json(psychologists);
    }catch (error){
        res.status(500).json({message: "Erro ao listar psicólogos"})
    }
};


