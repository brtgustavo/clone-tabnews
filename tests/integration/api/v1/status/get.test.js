// Teste automatizado para verificar o endpoint /api/v1/status
// Usamos Jest para definir e rodar o teste
test("GET to /api/v1/status should return 200", async () => {
  // Faz uma requisição HTTP GET para a API local na porta 3000
  const response = await fetch("http://localhost:3000/api/v1/status");
  // Verifica se o código de status retornado é 200 (OK)
  // Caso não seja, o teste falhará
  expect(response.status).toBe(200);
});
