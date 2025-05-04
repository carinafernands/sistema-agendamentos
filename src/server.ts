import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();


app.use(express.json());

app.get('/users', async (req, res) =>{
   try{
    const users = await prisma.user.findMany();
    res.json(users);
   }catch(error){
    res.status(500).json({error: 'Erro ao buscar usuário!'});
   }
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000!`);
});