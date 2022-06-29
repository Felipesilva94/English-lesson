// //Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy 


// //Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

// *DESAFIO EXTRA* 

// //Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 
 

let comedy = [
  {
    title: "os farofeiros", 
    director: "Roberto Santucci", 
    year: 2018
    
  },
  {
    title: "Minha Mãe é Uma Peça 3", 
    director: "Susana Garcia", 
    year: 2019
  },
  {
    title: "Deadpool", 
    director: "Tim Miller", 
    year: 2016
  }
];

if( comedy[0].title === 'os farofeiros' && comedy[1].title === 'Minha Mãe é Uma Peça 3' &&  comedy[2].title === 'Deadpool'){
  console.log(`MY FAVORIT MOVIE IS ${comedy[0].title}` );
}
else{console.log(`NOT EVEN 5 STARS`)}



let Action = [
  {
    title: "Logan", 
    director: "James Mangold", 
    year: 2017
    
  },
  {
    title: " Casino Royale", 
    director: " Martin Campbell", 
    year: 2006
  },
  {
    title: " Gladiador", 
    director: "Ridley Scott ", 
    year: 2000
  }
];

let Fantasy = [
  {
    title: "Harry Potter e a Pedra Filosofal", 
    director: "Chris Columbus ", 
    year: 2001
    
  },
  {
    title: "O Senhor dos Anéis: A Sociedade do Anel", 
    director: "Peter Jackson ", 
    year: 2001
  },
  {
    title: "Piratas do Caribe: A Maldição do Pérola Negra", 
    director: "Gore Verbinski ", 
    year: 2003
  }
]
