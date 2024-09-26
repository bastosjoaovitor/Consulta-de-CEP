# Consulta de CEP

Este é um projeto de uma aplicação web que permite consultar informações detalhadas de um endereço a partir de um CEP (Código de Endereçamento Postal) brasileiro. O site foi desenvolvido com o objetivo de praticar e aplicar os conhecimentos adquiridos em **React**, **Tailwind CSS** e **APIs**.

## Acesse o Projeto

Você pode acessar o site do projeto online através do link:

[Consulta de CEP](https://buscador-cep-bas.vercel.app/)

## Other Languages

- [English version](README.md)

## Funcionalidades

- Consulta de informações de um CEP válido.
- Exibição de logradouro, bairro, localidade, UF, estado, região, código IBGE e DDD.
- Validação do CEP informado pelo usuário.
  
## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface.
- **Tailwind CSS**: Framework CSS para estilização responsiva.
- **Vite**: Ferramenta de build rápida para o desenvolvimento front-end.
- **HTML5**: Para a estruturação do conteúdo.
- **CSS3**: Para estilização adicional.
- **JavaScript**: Para a lógica da aplicação.
- **API do ViaCEP**: Serviço para consulta de endereços a partir do CEP.

## Estrutura do Projeto

```bash
├── public
│   ├── vite.svg
├── src
│   ├── assets
│   │   ├── react.svg
│   ├── components
│   │   ├── BuscaCep.jsx
│   │   ├── InfoCep.jsx
│   │   └── Title.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── LICENSE
├── README.md
├── README_pt-BR.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Como executar o projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. Clone o repositório:

```bash
    git clone https://github.com/bastosjoaovitor/Consulta-de-CEP.git
```

2. Navegue até o diretório do projeto:

```bash
    cd consulta-cep
```

3. Instale as dependências:

```bash
    npm install
```

4. Execute o projeto:

```bash
    npm run dev
```

5. Ainda no terminal:

```bash
    Clique O + Enter
```

## Autor

Desenvolvido por João Vitor Bastos.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é de código aberto e está sob a [licença MIT](LICENSE).