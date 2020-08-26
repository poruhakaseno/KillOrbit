using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Configuration;

using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.SqlClient;

using System.Security.Principal;
using System.Threading.Tasks;
using Dapper;

namespace WebApplication2.Controllers
{
    public class PTNController : ApiController
    {
        private static string _connectionString = WebConfigurationManager.AppSettings["dbConnectionString"];

        public PTNController()
        {

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/ptn")]
        public async Task<HttpResponseMessage> getPTNList(HttpRequestMessage request)
        {
            IEnumerable<dynamic> processingCountryList = null;

            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    string query = "SELECT * from ptn";

                    processingCountryList = await conn.QueryAsync<dynamic>(query);
                }
            }
            catch (Exception e)
            {
                return request.CreateResponse(HttpStatusCode.InternalServerError, "retrieving processing country with count" + e.ToString());
            }

            return request.CreateResponse(HttpStatusCode.OK, processingCountryList.Select(x => ToDto(x)));

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/ptn/{strPtn}")]
        public async Task<HttpResponseMessage> getPTN(HttpRequestMessage request,  [Required]string strPtn)
        {
            IEnumerable<dynamic> processingCountryList = null;
            //object processingCountryList = null;
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    string query = "SELECT * from ptn WHERE ptn=@ptn";

                     processingCountryList = await conn.QueryAsync<dynamic>(query,new {ptn = strPtn});
                }
            }
            catch (Exception e)
            {
                return request.CreateResponse(HttpStatusCode.InternalServerError, "retrieving processing country with count" + e.ToString());
            }
            //return request.CreateResponse(HttpStatusCode.OK, ToDto(processingCountryList));
            return request.CreateResponse(HttpStatusCode.OK, processingCountryList.Select(x => ToDto(x)));
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/ptn/")]
        public async Task<HttpResponseMessage> postPTN(HttpRequestMessage request,  
            //[Required][StringLength(10, ErrorMessage = "Barcode id length must not be over 10")]string strPtn,
            [Required][FromBody]PtnDto ptnObj)
        {
            IEnumerable<dynamic> processingCountryList = null;

            try
            {
                DateTime dateTime = DateTime.Now;
                string completedDate = dateTime.ToString("yyyy-MM-dd HH:mm:ss.fff");
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    string insertQuery = "INSERT INTO ptn(ptn, po, upstatus, supplier, shipto) VALUES(@ptn, @po, @upstatus, @supplier, @shipto)";
                    var insertResult = await conn.ExecuteAsync(insertQuery, new
                    {
                        ptn = ptnObj.ptn,
                        po = ptnObj.po,
                        upstatus = ptnObj.upstatus,
                        supplier = ptnObj.supplier,
                        shipto = ptnObj.shipto
                    });
                }
            }
            catch (Exception e)
            {
                return request.CreateResponse(HttpStatusCode.InternalServerError, "retrieving processing country with count" + e.ToString());
            }
            return request.CreateResponse(HttpStatusCode.OK, ToDto(processingCountryList));
        }

        public static PtnDto ToDto(dynamic record)
        {
            if (record != null)
            {
                return new PtnDto
                {
                    ptn = record.ptn,
                    po = record.po,
                    upstatus = record.upstatus,
                    supplier = record.supplier,
                    shipto = record.shipto
                };
            }

            return null;
        }


    }
}
