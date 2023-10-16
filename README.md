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