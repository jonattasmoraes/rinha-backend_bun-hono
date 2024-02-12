import { Hono } from "hono";

import {
  atualizarSaldo,
  buscarCliente,
  calcularNovoSaldo,
  inserirTransacao,
} from "../repositories/cliente.repository";

const transacoes = new Hono();

transacoes.post("/:id/transacoes", async (c) => {
  const { id } = c.req.param();
  const clienteId = parseInt(id);

  const body = await c.req.json();
  const { valor, tipo, descricao } = body;

  if (!valor || !tipo || !descricao) {
    return c.json(null, 422);
  }

  if (tipo !== "c" && tipo !== "d") {
    return c.json(null, 422);
  }

  if (descricao.length > 10) {
    return c.json(null, 422);
  }

  const cliente = await buscarCliente(clienteId);
  if (!cliente) {
    return c.json(null, 404);
  }

  const novoSaldo = calcularNovoSaldo(cliente, tipo, valor);

  if (tipo === "d" && novoSaldo < -cliente.limite) {
    return c.json(null, 422);
  }

  try {
    await inserirTransacao(clienteId, valor, tipo, descricao);
    await atualizarSaldo(clienteId, novoSaldo);

    return c.json({ limite: cliente.limite, saldo: novoSaldo }, 200);
  } catch (err) {
    return c.json(null, 422);
  }
});

export default transacoes;
