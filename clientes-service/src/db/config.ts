import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();


export const conexao = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    port:parseInt(process.env.MYSQL_PORT || "3306"),
    database:process.env.MYSQL_DATABASE
});

conexao.connect(err =>{
    if(err){
        return console.error(`Erro ao estabelecer a conexão com o banco de dados - > ${err.message}`)
    }
    console.log(`Conexão com o banco de dados estabelecida`)
})