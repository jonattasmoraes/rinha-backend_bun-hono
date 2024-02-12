#Jônattas Moraes - Rinha de Backend - 2024/Q1

Repositório da [Rinha de Backend - 2024/Q1](https://github.com/zanfranceschi/rinha-de-backend-2024-q1). A rinha é um desafio focado no aprendizado mas sem deixar de lado a diversão, voce pode acompanhar o andamento dos desafios e as informacoes pelo [Twitter](https://twitter.com/rinhadebackend).

## Sobre o Desafio

Aqui voce encontra o código da minha participacão na Rinha de Backend. O desafio consiste em criar uma API HTTP que gerencie transações de crédito e débito para clientes, assegurando a consistência dos saldos em relação aos limites definidos. Adicionalmente, a API precisa disponibilizar um extrato contendo as informações das últimas transações realizadas pelo cliente.

### Endpoints Implementados

- **POST /clientes/[id]/transacoes**: Registra uma nova transação (crédito ou débito) para o cliente especificado.
- **GET /clientes/[id]/extrato**: Retorna o extrato contendo o saldo atual, limite e as últimas transações do cliente.

### Regras Específicas

- Transações de débito não podem reduzir o saldo do cliente abaixo do seu limite.
- Requisições que resultariam em saldo inconsistente devem retornar HTTP 422.
- IDs de clientes inexistentes devem retornar HTTP 404.

## Tecnologias Utilizadas

- **Linguagem de Programação**: Bun.js, Hono e NGINX.
- **Banco de Dados**: PostgreSQL.
- **Conteinerização**: Docker e Docker Compose.

## Como Usar

Para executar a solução localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone
   ```
2. Navegue até o diretório do projeto e execute com Docker Compose:
   ```bash
   cd bun_hono
   docker-compose up --build
   ```

## Detalhes

<img width="1032" alt="stats screen" src="https://github.com/jonattasmoraes/rinha-backend_bun-hono/blob/master/load-test/user-files/simulations/rinhabackend/Capture-2024-02-12-063520.png">

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
