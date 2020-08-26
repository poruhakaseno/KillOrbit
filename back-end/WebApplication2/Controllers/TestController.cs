using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class TestController : ApiController
    {
		[System.Web.Http.HttpGet]
		[System.Web.Http.Route("api/test")]
		public async Task<HttpResponseMessage> getTest(HttpRequestMessage request)
		{

			return await Task<HttpResponseMessage>.Factory.StartNew(() =>
			{
				return Request.CreateResponse(HttpStatusCode.OK, "test");
			});
		}

		[System.Web.Http.HttpGet]
		[System.Web.Http.Route("api/author")]
		public HttpResponseMessage GetAuthor(HttpRequestMessage request)
		{
			//IEnumerable<dynamic> countryList = null;
			Author author = new Author();
			author.Id = 12;
			author.Name = "abc";


			return request.CreateResponse(HttpStatusCode.OK, author);
		}
	}
}
