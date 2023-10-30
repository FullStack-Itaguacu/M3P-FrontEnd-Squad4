# Pharmacy Central System

O Pharmacy Central System API é uma excelente solução para gerenciamento de usuários, medicamentos e vendas, através de uma aplicação leve que roda no seu navegador.

![screenshot da aplicação](public/screenshot.png)

## Descrição do Projeto

O Pharmacy Central System é uma aplicação web desenvolvida em JavaScript usando a biblioteca React.js que permite e gerenciamento de usuários, medicamentos e vendas. A aplicação funciona em conjunto com a API do Pharmacy Central System o que permite a comunicação com o banco de dados.


## Como executar em modo de desenvolvimento

1. Faça o download ou clone do repositório através do GitHub.
2. Dentro da pasta raiz do repositório, execute o comando `npm i` para instalar todas as dependências.
3. Após instalar as dependências, você pode executar a aplicação em modo de desenvolvimento usando o comando `npm run dev` dentro da mesma pasta.
4. Acesse http://localhost:5173 no seu navegador.

## Como acessar a aplicação em produção

1. Acesse https://m3-p-front-end-squad4.vercel.app.

## Tecnologias

- O Pharmacy Central System foi criado a partir do Vite com a biblioteca React.js usando a linguagem JavaScript;
- A estilização foi feita em sua maioria utilizando a biblioteca Styled Components;
- Todo o sistema de rotas da aplicação foi feito com a biblioteca React Router DOM;
- A biblioteca axios foi usada para fazer determinadas requisições à API;
- Os dados sobre os CEPs são puxados através da API do ViaCEP e as coordenadas através da API do OpenStreetMap.
- Os dados são armazenados em um banco de dados relacional PostgreSQL;
- Dentre outras bibliotecas utilizadas no projeto também estão Yup, React Input Mask, React Hook Form e React Redux.


## Sobre o Pharmacy Central System

Ainda é uma versão bastante inicial do projeto portanto muitas funcionalidades e melhorias ainda podem ser adicionadas, principalmente no gerenciamento de usuários através do sistema interno.
