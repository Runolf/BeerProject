namespace BetterBackBeer.DAL.Models
{
    public class BeerModelDao
    {
        public int BeerID { get; set; }
        public string Name { get; set; }
        public string Brewery { get; set; }
        public string Country { get; set; }
        public double? Degree { get; set; }
        public string Color { get; set; }
        public string Fermentation { get; set; }
        public string SpecialCat { get; set; }
    }
}
