import { pool } from "../database/clientePool";
import {
  INSERT_TRANSACAO_QUERY,
  SELECT_CLIENTE_QUERY,
  SELECT_TRANSACOES_QUERY,
  UPDATE_SALDO_QUERY,
} from "../database/queries";
import { Cliente } from "../interfaces/clienteInterface";

export async function buscarCliente(
  clienteId: number
): Promise<Cliente | undefined> {
  const result = await pool.query(SELECT_CLIENTE_QUERY, [clienteId]);
  return result.rows[0];
}

export function calcularNovoSaldo(
  cliente: Cliente,
  tipo: string,
  valor: number
): number {
  return tipo === "c" || tipo === "d"
    ? cliente.saldo + valor
    : cliente.saldo - valor;
}

export async function inserirTransacao(
  clienteId: number,
  valor: number,
  tipo: string,
  descricao: string
): Promise<void> {
  await pool.query(INSERT_TRANSACAO_QUERY, [clienteId, valor, tipo, descricao]);
}

export async function atualizarSaldo(
  clienteId: number,
  novoSaldo: number
): Promise<void> {
  await pool.query(UPDATE_SALDO_QUERY, [novoSaldo, clienteId]);
}

export async function buscarTransacoes(clienteId: number): Promise<any[]> {
  const result = await pool.query(SELECT_TRANSACOES_QUERY, [clienteId]);
  return result.rows;
}
