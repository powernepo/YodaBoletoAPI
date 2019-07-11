create database yodaAPI;
use yodaAPI;

create table usuario(
	codigo integer primary key auto_increment,
    usuario varchar(64) not null unique , -- Utiliza para fazer o login, não pode ser igual
	nome varchar(64) not null,
    sobrenome varchar(64) default "",
    email varchar(64) not null unique , -- não pode ser igual
    senha varchar(200) not null, -- Utiliza para fazer o login
    -- --------------------------------------
    -- Explicações do STATUS ----------------
	-- 0 = Aguardando liberação de acesso   -
    -- 1 = Habilitado a utilizar o sistema  -
    -- 2 = Desabilitado a utilizar o sistema-
    -- --------------------------------------
    -- Explicações tipo usuario -------------
    -- 0 = Não habilitado para modificar    -
    -- outros usuários                      -
    -- 1 = Habilitado ao usuario para       -
    -- gerenciar outros usuarios            -
	-- --------------------------------------
    tipo_usuario int default 0
);
create table boleto(
	codigo integer primary key auto_increment,
    nome varchar(64),
    valor varchar(64),
    vencimento date,
    emissao date,
    id_usuario int,
    caminho text,
    -- --------------------------------------
    -- Verificado ---------------------------
    -- 0 = NÃO VIRIFICADO -------------------
    -- 1 = VERIFICADO -----------------------
    -- --------------------------------------
    -- Explicações do STATUS ----------------
	-- 0 = Boleto pendente ( VERDE )                  -
    -- 1 = Falta 3 dias para paga o boleto ( AMARELO )  -
    -- 2 = atrasado ( VERMELHO )                         -
    -- --------------------------------------
    foreign key (id_usuario) references usuario(codigo)
);