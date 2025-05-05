import { prisma } from "../prisma";
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";

export const loginService = async (email: string, password: string): Promise<string> => {

        const user: User | null = await prisma.user.findUnique({
            where:{email},
            include:{ psychologist: true, massageTherapist: true}
        });

        if(!user || user.password !== password){
            throw new Error("Credenciais inválidas");
        }

        const token = jwt.sign
        ({id: user.id, role: user.role},
         process.env.JWT_SECRET as string,
        {expiresIn: '1d'});
        return token;
}


