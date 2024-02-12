import { Hono } from "hono";
import extrato from "./controllers/extratoController";
import transacoes from "./controllers/clientesController";

const app = new Hono();

app.route("/clientes", extrato);
app.route("/clientes", transacoes);

const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 3000;

export default {
  port: port,
  fetch: app.fetch,
};
console.log(`Server is running on port ${port}`);
