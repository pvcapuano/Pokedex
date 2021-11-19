## Projeto

![Captura de Tela 2021-11-16 às 20 37 55](https://user-images.githubusercontent.com/10540844/142083515-d03e731b-5764-4341-923f-5244c7d3ed62.png)

![Captura de Tela 2021-11-16 às 20 57 31](https://user-images.githubusercontent.com/10540844/142084911-efd8e1c1-a798-404e-b207-8bb348e04b94.png)


## Projeto em produção:

<p>
 <a href="pokedex-two-iota.vercel.app" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:
* ReactJs
* Styled Components
* React Hooks
* Fetch API

## Objetivo:
Estudar mais sobre o consumo de APIs, reforçar Async/Await e aprender a passar props no Styled Component. 

## Resumo:

* O projeto foi separado em 3 componentes: Um Header, List e o ListItem. 
* A API foi consumida via fetch. Depois os dados foram passados para o ListItem através do map(). 
* O ListItem era um card onde continha as informações como foto, id, nome e o tipo do Pokemón. A cor do fundo do card é alterado dinamicamente de acordo com o tipo através das props passadas no Styled Components.
* Depois disso fiz um map() no List para listar todos os cards. Foi adicionado um botão para carregar mais Pokemóns na tela. Defini o limite de 50 por vez.
* No App.js criei um estado e alterei a borda para a cor verde como se fossem meus Pokemóns na pokebola.
