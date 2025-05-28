import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ServiceClientes from "./services/serviceclientes";
dotenv.config();

const cliente = new ServiceClientes();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/clientes/listar",(req,res)=>{
    cliente.listarCliente(req,res);
});

app.post("/clientes/inserir",(req,res)=>{
    cliente.inserirCliente(req,res);
});

app.put("/clientes/atualizar/:id",(req,res)=>{
    cliente.atualizarCliente(req,res);
});

app.delete("/clientes/deletar/:id",(req,res)=>{
    cliente.deletarCliente(req,res);
});

app.listen(process.env.HOST_PORT,()=>{
    console.log(`Servidor online em: http://${process.env.HOST_ADDR}:${process.env.HOST_PORT}`);
}
);