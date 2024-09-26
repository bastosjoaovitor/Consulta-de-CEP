# CEP Search

This is a web application project that allows you to search for detailed information about an address using a Brazilian CEP (Postal Code). The website was developed with the aim of practicing and applying the knowledge acquired in **React**, **Tailwind CSS** and **APIs**.

## Access the Project

You can access the project website online through the link:

[CEP Search](https://buscador-cep-bas.vercel.app/)

## Other Languages

- [Versão em Português](README_pt-BR.md)

## Functionalities

- Search for information about a valid CEP.
- Display of street, neighborhood, location, state, region, IBGE code and area code.
- Validation of the CEP entered by the user.

## Technologies Used

- **React**: JavaScript library for building the interface.
- **Tailwind CSS**: CSS framework for responsive styling.
- **Vite**: Rapid build tool for front-end development.
- **HTML5**: For structuring content.
- **CSS3**: For additional styling.
- **JavaScript**: For application logic.
- **ViaCEP API**: Service for querying addresses based on zip codes.

## Project Structure

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

## How to run the project

Follow the steps below to run the project on your local machine:

1. Clone the repository:

```bash
    git clone https://github.com/bastosjoaovitor/Consulta-de-CEP.git
```

2. Navigate to the project directory:

```bash
    cd consulta-cep
```

3. Install the dependencies:

```bash
    npm install
```

4. Run the project:

```bash
    npm run dev
```

5. Still in the terminal:

```bash
    Press O + Enter
```

## Author

Developed by João Vitor Bastos.

## Contributions

Contributions are welcome! Feel free to open issues or send pull requests.

## License

This project is open source and is under the [MIT license](LICENSE).