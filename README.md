# Nextjs13 Library

## Objetivo do repositório

Esse repositório tem como objetivo servir como consulta para as novas funcionalidades
trazidas pela versão 13 do nextJs. O próprio readme referenciará as técnicas utilizadas 
para atingir determinado resultado.

## Referências

### Route handlers

É possível criar uma API diretamente em aplicações next. Para fazer requisições basta usar 
a fetch api ou uma biblioteca de terceiros. Essa abordagem é útil também para fazer requisições
a databases diretamente ou por intermédio de ORM's.

- [defininindo uma route handler](./src/app/api/users/route.ts)
- [consumindo uma route handler](./src/app/users/page.tsx)
- [documentação oficial](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

### Negar acesso a API do lado cliente

Caso seja preferível que os dados da API construido pelos route handlers fique inacessível 
aos navegadores, É possível utilizar-se dos middlewares, que é uma porção de código que é
executada antes da etapa de renderização.

- [Permitindo acesso a API apenas do lado server](./src/middleware.ts)
- [documentação middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)