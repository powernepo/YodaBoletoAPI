create database yodaAPI;
use yodaAPI;

create table usuario(
	codigo integer primary key auto_increment,
    usuario varchar(64) not null unique , -- Utiliza para fazer o login, não pode ser igual
	nome varchar(64) not null,
    sobrenome varchar(64) default "",
    email varchar(64) not null unique , -- não pode ser igual
    senha varchar(32) not null -- Utiliza para fazer o login
);
create table boleto(
	codigo integer primary key auto_increment,
    nome_item varchar(64),
    valor varchar(64),
    vencimento date,
    _status int default 0,
    emissao long,
    id_usuario int,
    caminho varchar(120),
    verificado int default 0,
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

create table boleto_verificado(
	codigo integer primary key auto_increment,
    id_boleto integer unique not null,
    id_usuario integer not null,
    codigo_acesso text,
    
    foreign key (id_boleto) references boleto(codigo),
    foreign key (id_usuario) references usuario(codigo)
); 

create table permissao(
    -- --------------------------------------
    -- Explicações do CODIGO ----------------
    -- o codigo do usuário deve ser inserido-
    -- após a criação da conta no sistema   -
    -- --------------------------------------
	codigo integer primary key unique ,
    _status int default 0, 
    -- --------------------------------------
    -- Explicações do STATUS ----------------
	-- 0 = Aguardando liberação de acesso   -
    -- 1 = Habilitado a utilizar o sistema  -
    -- 2 = Desabilitado a utilizar o sistema-
    -- --------------------------------------
    -- Explicações tipo usuario -------------
    -- 0 = Não habilitado                   -
    -- 1 = Habilitado ao usuario            -
	-- --------------------------------------
    tipo_usuario int default 0,
    foreign key (codigo) references usuario(codigo)
);
