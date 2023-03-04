-- Database: G15
drop table if exists picture;
drop table if exists review;
drop table if exists historicRent;
drop table if exists favourites;
drop table if exists property;
drop table if exists student;

create table if not exists student(
	studentId int primary key,
	name varchar(30),
	email varchar(30),
	password varchar(30),
	phone varchar(10)
);

create table if not exists property(
	propertyId int primary key,
	bedroom int,
	bathroom int,
	sqft float,
	monthlyRent float,
	address varchar(100),
	location varchar(20),
	email varchar(30),
	commuteTime int
);

create table if not exists favourites(
	studentId int references student(studentId),
	propertyId int references property(propertyId),
	primary key (studentId, propertyId)
);

create table if not exists historicRent(
	propertyId int references property(propertyId),
	dateIni date,
	dateEnd date,
	monthlyRent float
);

create table if not exists review(
	propertyId int references property(propertyId),
	date date,
	comment varchar(255),
	rating int
);

create table if not exists picture(
	propertyId int references property(propertyId),
	relativePath varchar(50),
	primary key (propertyId, relativePath)
);

