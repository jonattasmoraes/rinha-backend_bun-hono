export const SELECT_CLIENTE_QUERY = "SELECT * FROM clientes WHERE id = $1";
export const INSERT_TRANSACAO_QUERY =
  "INSERT INTO transacoes (cliente_id, valor, tipo, descricao) VALUES ($1, $2, $3, $4)";
export const UPDATE_SALDO_QUERY =
  "UPDATE clientes SET saldo = $1 WHERE id = $2";
export const SELECT_TRANSACOES_QUERY =
  "SELECT * FROM transacoes WHERE cliente_id = $1 ORDER BY realizada_em DESC LIMIT 10";
