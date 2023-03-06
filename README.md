# ProjetoWp

Projeto full stack utilizando Angular, Bootstrap, API com AdonisJS e SQL Lite

Este projeto tem como base aplicações de wacth parties, como [YouTube](https://www.youtube.com/), [Watch2gether](https://w2g.tv) e [Teleparty](https://www.teleparty.com) onde várias pessoas podem entrar na sala e assistir ao vídeo selecionado (não necessariamente de forma sincronizada). Entre tanto a principal referência de UI / UX foi o [Google Meet](https://meet.google.com/).

## Nesta versão, o usuário pode:

- Criar uma sala;
- Carregar um vídeo da sua escolha;
- Exibir o vídeo para convidados;
- Editar nome e descrição de uma sala;
- Excluir uma sala;
- Acessar listagem de salas criadas;
- Pesquisar por uma sala, por meio do id;
- Pesquisar dinâmicamente uma sala por meio do nome texto digitado no campo de busca;
- Chat de texto / Comentários;
- Contador de comentários / mensagens;
- Contagem de comentário automática;
- Aplicação hospedada no Vercel.

#### É possível [acessar por aqui](https://watch-party-project-ipx0g5h1e-luisoliveira-jr.vercel.app/) o deploy da aplicação que foi feito pelo Vercel.

## Para rodar a aplicação locamente siga os passos a seguir:

### Sobre o Front End

Acesse o repositório [aqui](https://github.com/luisoliveira-jr/Projeto-WP-V01)

- Baixar e instalar Nodejs;
- Pela linha de comando no terminal, dentro da pasta raiz do projeto, instalar pacotes do Node: `npm install` ;
-Pela linha de comando no terminal, dentro da pasta raiz do projeto, executar um projeto: `ng serve` ;

### Sobre o Back End

Acesse o repositório [aqui](https://github.com/matheusbattisti/curso_adonis_api_yt)

Foi ultilizada uma API disponibilizada no Git Hub por Matheus Battisti, detalhes sobre como ela foi desenvolvida, você pode [acessar por aqui](https://www.youtube.com/watch?v=y8XfJJYhXPE&list=PLnDvRpP8BneyHealXbzntUoFtE4SrFWWW&index=3)

# Para rodar a aplicação back end locamente siga os passos a seguir:

- Com o Node instalado, executar o comando: `npm install` dentro da pasta raiz do projeto
- Executar o comando: `node ace generate:key` dentro da pasta raiz do projeto
- Copiar key informada
- Ajustar o arquivo de variáveis de ambiente: .env.example
    -> copiar e colar o Arquivo
    -> renomear a cópia para: .env
- No novo arquivo .env substituir a chave em APP_KEY para a que foi gerada pelo comando `node ace generate:key`
- Para criar o banco de dados, executar: `node ace migration:run` dentro da pasta raiz do projeto,
- Executar o comando: `node ace serve` dentro da pasta raiz do projeto,


## Detalhes sobre Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
