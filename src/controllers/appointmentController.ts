import { Request, Response } from "express";
import { createAppointment } from "../services/appointmentService";
import { ServiceType } from "@prisma/client";

export const addAppointment = async (req: Request, res: Response): Promise<void> => {
    try{
        const{serviceType, date, time, profissionalId} = req.body;

        const user = req.body;
        if(!user){
            res.status(401).json({message:"Usuário não autenticado"});
            return
        }

        const appointment = await createAppointment(
            user.id,
            serviceType as ServiceType,
            date,
            time,
            profissionalId
        );

         res.status(201).json(appointment);
         return;

    }catch(error: any){
        console.error(error);
         res.status(500).json({message: "Erro ao criar agendamento"});
         return;
    }
};