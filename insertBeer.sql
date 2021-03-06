USE [BeerProject]
GO

insert dbo.Brewery values ('Brasserie Lefèbvre', 'Belgium');
insert dbo.Brewery values ('Brasserie Artois', 'Belgium');
insert dbo.Brewery values ('Brasserie Dubuisson', 'Belgium');
insert dbo.Brewery values ('Abbaye Notre-Dame de Scourmont', 'Belgium');
insert dbo.Brewery values ('Brasserie Arthur Guinness','Ireland');


INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Barbar', 8,'Blonde', 'Haute', NULL, 1);
INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Leffe',6.6,'Blonde', 'Haute', 'Abbaye', 2);
INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Cuvée des Trolls', 7,'Blonde', 'Haute', NULL, 3);
INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Bush', 12, 'Ambrée', 'Haute', NULL, 3);
INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Chimay Bleue', 9, 'Brune', 'Tripe fermentation', 'Abbaye', 4);
INSERT [dbo].[Beer] ([Name], [Degree], [Color], [Fermentation], [SpecialCat], BreweryID) VALUES ('Guinness', 4.2, 'Noire', 'Haute', NULL, 5);

 
select 
	Be.Name, 
	Be.Degree, 
	Be.Color, 
	Be.Fermentation, 
	Be.SpecialCat, 
	Br.Country, 
	Br.Name as "Brewery" 
from Beer as Be
join Brewery as Br 
on Be.BreweryID = Br.BreweryID;


insert into Users (Pseudo, "Password") values ('Runolf', 'pass');
insert into Commune (Name, UserID) values ('Bergen', 1);