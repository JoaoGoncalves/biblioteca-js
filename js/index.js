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

let grid = document.querySelector('section.grid');
livros.map( livro => {
    grid.innerHTML += `
        <article>
            <h1>${livro.title}</h1>
            <h2>${livro.author}</h2>
            <img  src='livros/${livro.imageUrl}' />
            <p> Already Read: ${livro.alreadyRead ? '✅' :'❌' }</p> 
        </article>
    `;

});


