export default interface IClientes<T>{
    inserir(obj:T):Promise<T>;
    listar():Promise<T[]>;
    atualizar(obj:T):Promise<T>;
    deletar(id:Number):Promise<T>
}