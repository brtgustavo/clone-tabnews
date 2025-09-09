function status(request, response) {
  response.status(200).json({ chave: "Muito bom o curso.dev" });
}
export default status;
