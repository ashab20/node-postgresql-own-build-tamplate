CREATE DATABASE TODOS;

create table todos(
	id bigserial not null primary key,
	name varchar(100) not null,
	description varchar(255),
	created_at timestamp default now()
);

create table users(
	id bigserial not null primary key,
	name varchar(100) not null,
	email varchar(150) not null,
	phone varchar(20),
	password char(200) not null,
	description varchar(255),
	email_verified_at timestamp,
	created_at timestamp default now()
);