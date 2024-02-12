# Use a imagem base
FROM oven/bun:latest

# Configurar o diretório de trabalho
WORKDIR /usr/src/

# Copiar os arquivos package.json e bun.lockb
COPY package.json ./   
COPY bun.lockb ./     

# Instalar as dependências
RUN bun install

# Copiar todo o restante do código-fonte
COPY . .

# Comando padrão para executar o aplicativo
CMD ["bun", "run", "src/index.ts" ]  

