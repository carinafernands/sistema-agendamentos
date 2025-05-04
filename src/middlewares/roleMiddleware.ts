import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client";

export const authorizeRoles = (...roles: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if(!user || !roles.includes(user.role)){
           res.status(403).json({message: "Acesso negado"});
           return;
        }

        next();
    };
};