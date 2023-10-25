export const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Dynamic Store API',
      version: '0.1.0',
      description: 'Dynamic API for storing products from a fictitious store, perhaps located in Sydney, Australia',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Matheus Gomes',
        url: 'https://github.com/mdccg',
        email: 'matheus.gomes@estudante.ifms.edu.br',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['**/*.yml'],
};