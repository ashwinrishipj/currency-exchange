SELECT * FROM pg_catalog.pg_tables;

create table users (
	userId SERIAL PRIMARY KEY,
	userEmail TEXT  NOT NULL,
	userPassword TEXT NOT NULL
 );
 
INSERT INTO users(userId,userEmail,userPassword) 
VALUES (1,'alphabetagamma@gmail.com','Ashwin123#');

select * from users;

CREATE TABLE currency(
   currencyId INT GENERATED ALWAYS AS IDENTITY,
   userId INT,
   currencies TEXT [],
   PRIMARY KEY(currencyId),
   CONSTRAINT userIdFk
      FOREIGN KEY(userId) 
	  REFERENCES users(userId)
);

delete  from users where userid =1;
insert into currency (userId, currencies) values (4, ARRAY ['TOP','TRY']);

select * from currency;