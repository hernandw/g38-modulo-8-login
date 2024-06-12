create database empresa_usuarios_db;

create table users (
id serial primary key,
name varchar(50) not null,
email varchar(50) not null unique,
password varchar(60) not null,
rol varchar(10) not null default 'usuario',
createat timestamp with time zone default now()
);