import IClientes from "../interfaces/iclientes";
import Cliente from "../models/cliente";
import {conexao} from "../db/config"

export default class RepositoryCliente implements IClientes<Cliente>{
    inserir(obj: Cliente): Promise<Cliente> {
        return new Promise((resolve, reject)=>{
            conexao.query("insert into cliente(nome,email,idade)values(?,?,?)",
                [
                    obj.nome,
                    obj.email,
                    obj.idade
                ],
            (error,result)=>{
                if(error){
                    return reject(error);
                }
                else{
                    return resolve(result as any)
                }
            })
        })
        
    }
    listar(): Promise<Cliente[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from cliente",(error, result)=>{
                if(error){
                    return reject(error);
                }
                else{
                    return resolve(result as Cliente[]);
                }
            })
        })
    }
    atualizar(obj: Cliente): Promise<Cliente> {
         return new Promise((resolve, reject)=>{
            conexao.query("update cliente set nome=?,email=?,idade=? where id=?",
                [
                    obj.nome,
                    obj.email,
                    obj.idade,
                    obj.id
                ],
            (error,result)=>{
                if(error){
                    return reject(error);
                }
                else{
                    return resolve(result as any)
                }
            })
        })
    }
    deletar(id: Number): Promise<Cliente> {
         return new Promise((resolve, reject)=>{
            conexao.query("delete from cliente where id=?)",id,
            (error,result)=>{
                if(error){
                    return reject(error);
                }
                else{
                    return resolve(result as any)
                }
            })
        })
    }
    
}