IF not EXISTS (
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

create table Brewery(
	BreweryID int PRIMARY KEY IDENTITY(1,1) not null, 
	Name varchar(50),
	Country varchar(50)
)

CREATE TABLE Beer(
	BeerID	INT PRIMARY KEY IDENTITY(1,1) not null,
	Name varchar(50), 
	Degree float,
	Color varchar(50),
	Fermentation varchar(50),
	SpecialCat varchar(50) null,
	BreweryID int,
	foreign key (BreweryID) references Brewery(BreweryID)

)

CREATE TABLE Users(
	UserID	INT PRIMARY KEY IDENTITY(1,1) not null,
	Pseudo varchar(50) not null, 
	"Password" varchar(50) not null
)

create table Commune(
	CommuneID int PRIMARY KEY IDENTITY(1,1) not null,
	Name varchar(50),
	UserID int,
	foreign key (UserID) references Users(UserID)
)
