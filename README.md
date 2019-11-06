
Use o comando `yarn init -y` ou `npm init -y` para criar um arquivo package.json para o seu aplicativo. Nele vão são registradas, entre outras coisas, as depedências do projeto.

```
$ yarn init -y
```

Agora instale a dependencia do Express, que é um framework para NodeJS que faz as tratativas de rotas e requests HTTP.

```
$ yarn add express
```

Abra o projeto em seu editor, aqui usaremos o Visual Studio Code.

```
$ code .
```

O servidor será dividido em 3 partes:
1. Rotas
2. Controllers
3. Models

Rotas: crie um arquivo na raiz do projeto chamado `routes.js`.

