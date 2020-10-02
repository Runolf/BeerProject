IF NOT EXISTS (
	    SELECT *
        FROM sys.databases
        WHERE name = 'BeerProject'
)
BEGIN
	CREATE DATABASE BeerProject ; 
END
GO

USE BeerProject;
GO


CREATE TABLE Beer(
	BeerID	INT PRIMARY KEY IDENTITY(1,1) not null,
	Name varchar(50), 
	Brewery varchar(50),
	Country varchar(50),
	Degree float,
	Color varchar(50),
	Fermentation varchar(50),
	SpecialCat varchar(50) null
)

CREATE TABLE "User"(
	UserID	INT PRIMARY KEY IDENTITY(1,1) not null,
	Pseudo varchar(50) not null, 
	"Password" varchar(50) not null
)