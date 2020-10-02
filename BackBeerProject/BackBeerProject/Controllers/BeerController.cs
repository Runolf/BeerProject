using DataAccessLayer;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackBeerProject.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
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
