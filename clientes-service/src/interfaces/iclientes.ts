export default interface IClientes<T>{
    insert(obj:T):Promise<T>;
    list():Promise<T[]>;
    update(obj:T):Promise<T>;
    delete(id:Number):Promise<T>
}