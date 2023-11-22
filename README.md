# dynamic-store-api

## Sumário

- [dynamic-store-api](#dynamic-store-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste em uma API que simula o funcionamento de uma loja fictícia. O destaque desta atividade em comparação com a atividade anterior é que o desenvolvimento ocorreu de maneira quase independente, sem recursos pré-existentes apelativos por parte do professor ou de soluções prontas. O resultado é uma aplicação que reflete não apenas a funcionalidade de uma loja virtual, com seus produtos, descrições, preços e quantidades, mas também a dedicação e esforço necessários para criar uma documentação intuitiva e interativa.

Este foi o quarto repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Web Services.

| [&larr; Repositório anterior](https://github.com/mdccg/swagger-ui-demo) | [Próximo repositório &rarr;](https://github.com/mdccg/auth-via-hash-and-salt) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Framework back-end | [Express.js](https://expressjs.com/pt-br/) |
| Banco de dados | [SQLite](https://www.sqlite.org/) |
| Mapeamento Objeto-Relacional | [TypeORM](https://typeorm.io/) |
| API de documentação dinâmica | [Swagger](https://swagger.io/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para executar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Acesse o endereço de URL http://localhost:3001/docs para conferir a documentação da API gerada pelo Swagger a partir dos arquivos YAML.
