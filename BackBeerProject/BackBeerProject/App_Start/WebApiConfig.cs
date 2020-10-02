using System.Net.Http.Headers;
using System.Web.Http;

namespace BackBeerProject
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuration et services API Web

            // Itinéraires de l'API Web
            config.MapHttpAttributeRoutes();
            config.EnableCors(); // enable cross origin

            /*
               For more info: 
                    https://stackoverflow.com/questions/9847564/how-do-i-get-asp-net-web-api-to-return-json-instead-of-xml-using-chrome
            */
            config.Formatters.JsonFormatter.SupportedMediaTypes // enable json format
    .Add(new MediaTypeHeaderValue("text/html"));



            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
