USE [BeerProject]
GO
SET IDENTITY_INSERT [dbo].[Beer] ON 

INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (1, N'Barbar', N'Brasserie Lefèbvre', N'Belgium', 8, N'Blonde', N'Haute', NULL)
INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (2, N'Leffe', N'Brasserie Artois', N'Belgium', 6.6, N'Blonde', N'Haute', N'Abbaye')
INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (3, N'Cuvée des Trolls', N'Brasserie Dubuisson', N'Belgium', 7, N'Blonde', N'Haute', NULL)
INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (4, N'Bush', N'Brasserie Dubuisson', N'Belgium', 12, N'Ambrée', N'Haute', NULL)
INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (11, N'Chimay Bleue', N'Abbaye Notre-Dame de Scourmont', N'Belgium', 9, N'Brune', N'Tripe fermentation', N'Abbaye')
INSERT [dbo].[Beer] ([BeerID], [Name], [Brewery], [Country], [Degree], [Color], [Fermentation], [SpecialCat]) VALUES (12, N'Guinness', N'Brasserie Arthur Guinness', N'Ireland', 4.2, N'Noire', N'Haute', NULL)
SET IDENTITY_INSERT [dbo].[Beer] OFF
