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
	(1, 2, 2, 1073.0, 2995.0, '4084 Crystal Dawn Ln UNIT 203, San Diego, CA 92122', 'La Jolla', 'landlord1@gmail.com', 15),
	(2, 3, 3, 1355.6, 4200.1, '8585 Via Mallorca, UNIT 19, La Jolla, CA 92037', 'La Jolla', 'landlord2@gmail.com', 45),
	(3, 2, 2, 1033, 5000,'6345 Gullstrand St, San Diego, CA 92122', 'La Jolla', 'landlord3@gmail.com',35),
	(4, 3, 2, 1010, 3200,'10966 Via Blanco, San Diego, CA 92126', 'Miramar', 'landlord4@gmail.com',60),
	(5, 1, 1, 10, 1895,'4472 Bannock Ave, San Diego, CA 92117', 'Clairemont', 'landlord5@gmail.com',50),
	(6, 2, 1, 800, 2800,'5430 Lauretta St, APT D, San Diego, CA 92110', 'Old Town', 'landlord6@gmail.com',55),
	(7, 1, 1, 573, 2195,'420 Ash St, APT 1, San Diego, CA 92101', 'Downtown', 'landlord7@gmail.com',70),
	(8, 4, 3, 2717, 8000,'918 D Ave, Coronado, CA 92118', 'Coronado', 'landlord8@gmail.com',90),
	(9, 1, 2, 1200, 2650,'734 Broadway, # 4, Chula Vista, CA 91910', 'Chula Vista', 'landlord9@gmail.com',95),
	(10, 2, 2, 950, 2650,'128 W 7th Ave, Escondido, CA 92025', 'Escondido', 'landlord10@gmail.com',100),
	(11, 2, 2, 1008, 6500,'940 Sealane Dr, Encinitas, CA 92024', 'Encinitas', 'landlord11@gmail.com',85),
	(12, 3, 2, 1200, 3600,'4781 Mount Cervin Dr, San Diego, CA 92117', 'Clairemont', 'landlord12@gmail.com',30),
	(13, 2, 2, 1500, 7500,'1628 Torrey Pines Rd, # 1, La Jolla, CA 92037', 'La Jolla', 'landlord13@gmail.com',40),
	(14, 1, 1, 750, 2800,'5165 Luigi Ter, San Diego, CA 92122', 'La Jolla', 'landlord14@gmail.com',25),
	(15, 2, 1, 836, 2945,'8843 Villa La Jolla Dr, La Jolla, CA 92037', 'La Jolla', 'landlord15@gmail.com',20);
	
insert into picture values
	(1, '1_1.png'),
	(1, '1_2.png'),
	(1, '1_3.png'),
	(2, '2_1.png'),
	(2, '2_2.png'),
	(3, '3_1.png'),
	(3, '3_2.png'),
	(3, '3_3.png'),
	(3, '3_4.png'),
	(4, '4_1.png'),
	(4, '4_2.png'),
	(4, '4_3.png'),
	(4, '4_4.png'),
	(5, '5_1.png'),
	(5, '5_2.png'),
	(5, '5_3.png'),
	(5, '5_4.png'),
	(6, '6_1.png'),
	(6, '6_2.png'),
	(6, '6_3.png'),
	(6, '6_4.png'),
	(7, '7_1.png'),
	(8, '8_1.png'),
	(8, '8_2.png'),
	(8, '8_3.png'),
	(9, '9_1.png'),
	(10, '10_1.png'),
	(10, '10_2.png'),
	(10, '10_3.png'),
	(11, '11_1.png'),
	(11, '11_2.png'),
	(11, '11_3.png'),
	(12, '12_1.png'),
	(13, '13_1.png'),
	(13, '13_2.png'),
	(14, '14_1.png'),
	(14, '14_2.png'),
	(15, '15_1.png'),
	(15, '15_2.png');

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




