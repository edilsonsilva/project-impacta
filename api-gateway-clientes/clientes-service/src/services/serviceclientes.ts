import Cliente from "../models/cliente";
import RepositoryCliente from "../repositories/repositoryclientes";
import {Request, Response} from "express";
export default class ServiceClientes {
    repoCliente = new RepositoryCliente()

    async inserirCliente(req:Request, res:Response){
        const cli = new Cliente();
        try{
            cli.nome = req.body.nome;
            cli.email = req.body.email;
            cli.idade = req.body.idade;

            const rs = await this.repoCliente.inserir(cli);
            return res.status(201).json(rs);
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    async listarCliente(req:Request, res:Response){
        try{
            const rs = await this.repoCliente.listar();
            return res.status(200).json(rs);
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    async atualizarCliente(req:Request, res:Response){
        const cli = new Cliente();
        try{
            cli.nome = req.body.nome;
            cli.email = req.body.email;
            cli.idade = req.body.idade;
            cli.id = parseInt(req.params.id);
            const rs = await this.repoCliente.atualizar(cli);
            return res.status(200).json(rs);
        }
        catch(error){
            return res.status(500).json(error)
        }
    }

    async deletarCliente(req:Request, res:Response){
        try{
            const id = parseInt(req.params.id);
            const rs = await this.repoCliente.deletar(id);
            return res.status(200).json(rs);       
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
}