using DataAccessLayer;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace BackBeerProject.Controllers
{
    public class BeerController : ApiController
    {
        private BeerProjectEntities _context = new BeerProjectEntities();
        public IEnumerable<Beer> Get()
        {
            return _context.Beer.ToList();
        }

        public Beer Get(int ID)
        {
            return _context.Beer.FirstOrDefault(e => e.BeerID == ID);
        }
    }
}
