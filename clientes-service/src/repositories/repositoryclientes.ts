import IClientes from "../interfaces/iclientes";
import Cliente from "../models/cliente";

export default class RepositoryCliente implements IClientes<Cliente>{
    insert(obj: Cliente): Promise<Cliente> {
        return new Promise((resolve, reject)=>{
            
        })
        throw new Error("Method not implemented.");
    }
    list(): Promise<Cliente[]> {
        throw new Error("Method not implemented.");
    }
    update(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    delete(id: Number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    
}