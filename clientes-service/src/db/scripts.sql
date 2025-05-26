create database clientes_db;
use clientes_db;
create table clientes_db.cliente(
    id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    idade int not null,
    criado_em timestamp default current_timestamp,
    atualizado_em timestamp default current_timestamp on update current_timestamp()
);