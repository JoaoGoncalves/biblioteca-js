// Modelo de dados, a ser representado na pagina (INPUTS)
let livros = [
    {
        id: 0,
        title: 'Angular com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
        imageUrlGr: 'angularGr.png',
    },
    {
        id: 1,
        title: 'Blockchain com JS',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
        imageUrlGr: 'blockchainGr.png',
    },
    {
        id: 2,
        title: 'DeepLearning com JS',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
        imageUrlGr: 'deeplearningGr.png',
    },
    {
        id: 3,
        title: 'Joy of Javascript',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'joj.jpg',
        imageUrlGr: 'jojGr.png',
    },
    {
        id: 4,
        title: 'React Hooks',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'reacthooks.jpg',
        imageUrlGr: 'reacthooksGr.png',
    },
];

let grid = document.querySelector('section.grid');

// mostar os livros todos
mostrarLivros(livros);

// mostar os livros ja lidos
let livrosJaLidos = livros.filter( livro => livro.alreadyRead === true );

//mostrarLivros(livrosJaLidos);
let livrosNaoLidos = livros.filter( livro => livro.alreadyRead === false );
//mostrarLivros(livrosNaoLidos);



function mostrarLivros(arrayLivros){
    arrayLivros.map( livro => {
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