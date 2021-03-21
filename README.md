# MARVEL APP :atom_symbol:
Este projeto tem como objetivo consumir a [API da MARVEL](https://developer.marvel.com/) disponibilizando os dados em telas por meio de um projeto [React](https://pt-br.reactjs.org/). Para realizar as requisições foi utilizado o pacote ```axios```.

## Visite o site :link:

A aplicação pode ser visitada a qualquer momento pelo link: [https://marvel-app-alpha.vercel.app/](https://marvel-app-alpha.vercel.app/)

Publicação realizada pelo [Vercel](https://vercel.com/).

## Sobre o projeto

A página inicial lista os personagens, é possível caminhar entre as paginações.

Ao clicar no card de um personagem você será redirecionado para a página que detalha o respectivo personagem. Lá será possível visualizar mais informações, logo abaixo existe uma lista de quadrinhos em que o personagem teve sua participação.

### Tecnologias utilizadas
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Protótipos (Mockups)
Visite o [projeto no Figma](https://www.figma.com/file/059Ig3UohYHso5KngodOXw/marvel-app?node-id=0%3A1) para conferir o protótipo.



## Vamos começar? :smiley:
### Instalação do projeto

Após clonar o projeto do [repositório Github](https://github.com/Tava1/marvel-app), navegue até a raiz e execute o seguinte comando no terminal:

Este comando irá instalar todas as dependências necessárias do projeto.
```BASH
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Executar o projeto em ambiente local de desenvolvimento.
```BASH
yarn dev
```

### :wrench: Build do projeto
Para realizar o build do projeto.
```BASH
yarn build
```

## Estrutura de diretórios do projeto

### src
Este diretório armazena todo o código desenvolvido ou seja, lógica da aplicação, componentes, páginas, rotas, serviços e etc.

### components/elements
Contém apenas componentes estáticos, poder ser utilizado pelos ```components/mudules``` ou até mesmo por ```/pages```.

### components/modules
Contém componentes mais robustos, aqueles que podem conter lógica e/ou receber ```props```.

### pages
Armazena as páginas/rotas da apalicação.

### services
Contém a lógica de conexão com serviços externos, por exemplo a própria [API da MARVEL](https://developer.marvel.com/). 

### styles
Arquivos de estilos globais e também estilos das páginas são armazenados aqui.