import { prisma } from '../prisma';
import { ServiceType } from "@prisma/client";

export const createAppointment = async (
    userId: number,
    serviceType: ServiceType,
    date: string,
    time: string,
    profissionalId: number

) => {
    const appointmentData: any = {
        date: new Date(date),
        time,
        userId,
        serviceType
    };

    if(serviceType === 'psicologo'){
        appointmentData.psychologistId = profissionalId;
    } else if (serviceType === 'massagista'){
        appointmentData.massageTherapistId = profissionalId;
    } else if(serviceType === 'sala'){
        appointmentData.roomId = profissionalId;
    } else{
        throw new Error("Tipo de serviço inválido");
    }

    return await prisma.appointment.create({
        data: appointmentData
    });
};

