import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  console.log(databaseVersionValue);

  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue =
    databaseMaxConnections.rows[0].max_connections;
  console.log(databaseMaxConnectionsValue);

  const dataBaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dataBaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnections.rows[0].count;
  console.log(databaseOpenedConnectionsValue);

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        maxConnections: parseInt(databaseMaxConnectionsValue),
        openedConections: parseInt(databaseOpenedConnectionsValue),
      },
    },
  });
}
export default status;
