// Modelo de dados, a ser representado na pagina (INPUTS)
let livros = [
    {
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
    },
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
    },
    {
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
    },
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
    },
    {
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'reacthooks.jpg',
    },
];

let search = document.querySelector('input#search');
let grid = document.querySelector('section.grid');


// mostar os livros todos no inicio
mostrarLivros(livros);

// mostar os livros ja lidos
let livrosJaLidos = livros.filter( livro => livro.alreadyRead === true ); //array com livros ja lidos
let livrosNaoLidos = livros.filter( livro => livro.alreadyRead === false ); //array para livros nao lidos
let livrosPesquisa = []; //array para pesqeuisa de livros


//Definição de eventos 
search.addEventListener('input',(e) => serchTitleBooks(e.target.value), false);//pesquisa por titulo



function serchTitleBooks (text) { // listener para atualizar view da pesquisa
    livrosPesquisa = livros.filter( l => l.title.search(text) > -1);
    mostrarLivros(livrosPesquisa);
}



function mostrarLivros(arrayLivros){
    grid.innerHTML = ''; // limpar a grid anterior

    arrayLivros.map( livro => { //atualizar a view
        grid.innerHTML += `
            <article>
                <h1>${livro.title}</h1>
                <h2>${livro.author}</h2>
                <img  src='livros/${livro.imageUrl}' />
                <p> Already Read: ${livro.alreadyRead ? '✅' :'❌' }</p> 
            </article>
        `;
    
    });
}