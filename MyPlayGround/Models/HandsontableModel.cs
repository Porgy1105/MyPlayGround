using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;

namespace MyPlayGround.Models
{
    public class HandsontableModel
    {
        public HandsontableModel()
        {
            this.data = new JavaScriptSerializer().Serialize(SelectKeyTable());
        }

        public string data { get; set; }

        public List<KeyTableClass> SelectKeyTable(string type = null)
        {
            var result = new List<KeyTableClass>();

            var sb = new StringBuilder();

            sb.Append(" SELECT");
            sb.Append("     id,");
            sb.Append("     name,");
            sb.Append("     type,");
            sb.Append("     updatedatetime");
            sb.Append(" FROM ");
            sb.Append("     KeyTable");
            if (type != null)
            {
                sb.Append(" WHERE ");
                sb.Append("     type = @type");
            }

            using (var cn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString))
            {
                cn.Open();
                using (var cm = new SqlCommand(sb.ToString(), cn))
                {
                    if (type != null)
                    {
                        cm.Parameters.Add("@type", SqlDbType.Int).Value = type;
                    }
                    using (var dr = cm.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            var tmp = new KeyTableClass();
                            tmp.id = dr["id"].ToString();
                            tmp.name = dr["name"].ToString();
                            tmp.type = Convert.ToInt16(dr["type"]);
                            tmp.updatedatetime = DateTime.Parse(dr["updatedatetime"].ToString());
                            result.Add(tmp);
                        }
                    }
                }
            }

            return result;

        }
    }


    public class KeyTableClass
    {
        public string id { get; set; }
        public string name { get; set; }
        public int type { get; set; }
        public DateTime updatedatetime { get; set; }
    }
}