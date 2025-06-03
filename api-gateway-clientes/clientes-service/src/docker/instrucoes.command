Crie um diretório chamado mysql-dados. Este diretório será nosso volume de dados

Execute o comando abaixo, que criar um container para o banco de dados mysql

docker run --name srv-mysql -v "coloque_aqui_caminho_para_a_pasta_de_dados":/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -p 7801:3306 -d mysql:8.1

