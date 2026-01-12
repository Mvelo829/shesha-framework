using NHibernate.Dialect;
using NHibernate.Driver;
using NhConfiguration = global::NHibernate.Cfg.Configuration;
namespace Shesha.NHibernate.MsSql
{
    /// <summary>
    /// MS Sql configuration provider
    /// </summary>
    public class MsSqlConfigurationProvider : IDbmsSpecificConfigurationProvider
    {
        public NhConfiguration Configure(NhConfiguration nhConfig, string connectionString)
        {
            return nhConfig.DataBaseIntegration(db =>
            {
                db.ConnectionString = connectionString;

                db.Dialect<MsSql2012Dialect>();
                db.Driver<MicrosoftDataSqlClientDriver>();

                db.Timeout = 150;
                db.LogFormattedSql = true;
            });
        }
    }
}
