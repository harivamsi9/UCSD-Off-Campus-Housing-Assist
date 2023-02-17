-- Delete everything
delete from favourites;
delete from review;
delete from historicRent;
delete from picture;
delete from property;
delete from student;

insert into student values
	(1, 'Barack Obama', 'barack@ucsd.edu', '123456', '4423201111'),
	(2, 'Donald Trump', 'donald@ucsd.edu', 'donald2015', '4413209991');

insert into property values
	(1, 2, 2, 1073.0, 2995.0, '4084 Crystal Dawn Ln UNIT 203, San Diego, CA 92122', 92122, 'landlord1@gmail.com'),
	(2, 3, 3, 1355.6, 4200.1, '8585 Via Mallorca, UNIT 19, La Jolla, CA 92037', 92037, 'landlord2@gmail.com');
	
insert into picture values
	(1, '1_1.png'),
	(1, '1_2.png'),
	(1, '1_3.png'),
	(2, '2_1.png'),
	(2, '2_2.png');

insert into historicRent values
	(1, '2021-08-15', '2022-05-31', 2500.5),
	(1, '2021-09-20', '2022-03-31', 2650.5),
	(1, '2022-03-20', '2022-12-31', 2850.5);

insert into review values
	(1, '2021-09-01', 'I lived here for 6 months. The landlord is very good and the neighborhood is beautiful', 5),
	(1, '2020-05-26', 'I did not like this property at all!', 2),
	(1, '2023-02-10', 'This property is nice, but is too expensive :(', 4);

insert into favourites values
	(2, 1);




