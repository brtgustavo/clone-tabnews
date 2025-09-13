import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 6 + 1 AS SOMA;");
  console.log(result.rows);
  response.status(200).json({ chave: "Muito bom o curso.dev" });
}
export default status;
