using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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

        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public HttpResponseMessage Post([FromBody] Beer B)
        {
            try
            {
                _context.Beer.Add(B);
                _context.SaveChanges();

                HttpResponseMessage message = Request.CreateResponse(HttpStatusCode.Created, B);
                message.Headers.Location = new Uri(Request.RequestUri + B.BeerID.ToString());
                return message;

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
