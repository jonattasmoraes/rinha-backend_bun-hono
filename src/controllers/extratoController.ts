import { Context, Hono } from "hono";
import { pool } from "../database/clientePool";
import { SELECT_TRANSACOES_QUERY } from "../database/queries";
import { buscarCliente } from "../services/clienteService";

const extrato = new Hono();

extrato.get("/:id/extrato", async (c) => {
  const { id } = c.req.param();
  const clienteId = parseInt(id, 10);

  try {
    const cliente = await buscarCliente(clienteId);

    if (!cliente) {
      return c.json(null, 404);
    }

    const transacoes = await buscarTransacoes(clienteId);

    const saldoTotal: number = cliente.saldo;
    const dataExtrato: string = new Date().toISOString();
    const limite: number = cliente.limite;

    const ultimasTransacoes = transacoes.map((transacao) => ({
      valor: transacao.valor,
      tipo: transacao.tipo,
      descricao: transacao.descricao,
      realizada_em: transacao.realizada_em,
    }));

    return c.json(
      {
        saldo: {
          total: saldoTotal,
          data_extrato: dataExtrato,
          limite: limite,
        },
        ultimas_transacoes: ultimasTransacoes,
      },
      200
    );
  } catch (err) {
    console.error("Erro ao consultar extrato:", err);
    return c.json({ error: "Erro ao consultar extrato" }, 500);
  }
});

export default extrato;

// Função de consulta de transações (mantida da mesma forma)
export async function buscarTransacoes(clienteId: number): Promise<any[]> {
  const result = await pool.query(SELECT_TRANSACOES_QUERY, [clienteId]);
  return result.rows;
}
