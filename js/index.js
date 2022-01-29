
document.addEventListener('DOMContentLoaded', init , false);

function init(){

    // Declaracao das minhas variaveis globais
    let grid = document.querySelector('section.grid');
    let filters = document.querySelector('section.filters');

    let filterRead = document.querySelector('#filterRead');
    let filterNotRead = document.querySelector('#filterNotRead');

    let popup = document.querySelector('#popup');

    /// variaveis do formulario
    let formBook = document.querySelector('section.addEditBook form');
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let alreadyRead = document.getElementById('alreadyRead');
    let imageUrl = document.getElementById('imgUrl');
    let imageUrlGr = document.getElementById('imgUrlGr');

    //botoes de atualizar e acrwce tar livro
    let submitBtn = document.getElementById('submitBtn');
    let updateBtn = document.getElementById('updateBtn');

    let livroAEditar;




    /// Bloco de eventos da applicação
    filters.addEventListener('change', filterEvents, false);//seccao de filtros
    filters.addEventListener('input', filterEvents, false);//seccao de filtros

    grid.addEventListener('click', gridEvents, false);//seccao da grid de articles de livros
    
    popup.addEventListener('click', fecharPopup, false);// controle da popup

    formBook.addEventListener('submit', criarLivro, false); // form de acrescentar livros

    updateBtn.addEventListener('click', updateLivro, false);




    ///LOGICA do meu algoritmo
    mostrarLivros(livros);


    /// Bloco de Metodos da aplicação

    function criarLivro(e){

        //console.log(new Date().getTime());
        let id = new Date().getTime();

        let livro = new Livro(
            id,
            title.value,
            author.value,
            alreadyRead.checked,
            imageUrl.value,
            imageUrlGr.value
        );

        livros.push(livro);
        mostrarLivros(livros);
        //console.log(livro);
        
        formBook.reset();

        e.preventDefault();
    }

    function filterEvents(e){
        //console.log(filterNotRead);

        if(e.target.id === 'filterRead'){
            filtrarLivrosLidos(e.target.checked);
            filterNotRead.checked = false;
        }

        if(e.target.id === 'filterNotRead'){
            filtrarLivrosNaoLidos(e.target.checked);
            filterRead.checked = false;
        }
        
        if(e.target.id === 'searchInput'){
            let pesquisaTxt = e.target;
            //console.log(pesquisaTxt.value);
            filtrarPorTitulo(pesquisaTxt.value);
        }

    }

    function gridEvents(e){
        
        //console.log(e.target.nodeName);

        if (e.target.className === 'deleteBtn'){
            let id = e.target.dataset.id;
            apagarLivro(id);
        }

        if (e.target.nodeName === 'IMG'){
            let imgGrSrc = e.target.dataset.imggr;
            //console.log(imgGrSrc);
            mostrarPopup(imgGrSrc);
        }

        if(e.target.className === 'editBtn'){
            //console.log(e.target.dataset.id);
            let id = e.target.dataset.id;
            let livro = e.target.parentElement.parentElement;
            livro.classList.add('atualizar');

            atualizarLivro(id);
        }
    }


    /// Bloco das funcionalidades da aplicação
    function updateLivro (e){

        //console.log(livroAEditar);

        let livrosAtualizados = livros.map( livro => {
            if(livro.id === livroAEditar.id){
                return {
                    ...livro,
                    title: title.value,
                    author: author.value,
                    alreadyRead: alreadyRead.checked,
                    imageUrl: imageUrl.value,
                    imageUrlGr: imageUrlGr.value,
                    xpto: 'ola mundo',
                }
            } else {
                return livro;
            }
        });

        livros = livrosAtualizados;
        
        mostrarLivros(livros);

        formBook.reset();


        e.preventDefault();
    }


    function atualizarLivro(id){

        livroAEditar = livros.find( l => l.id == id);

        //console.log(livroAEditar);

        title.value = livroAEditar.title;
        author.value = livroAEditar.author;
        alreadyRead.checked = livroAEditar.alreadyRead;
        imageUrl.value = livroAEditar.imageUrl;
        imageUrlGr.value = livroAEditar.imageUrlGr;

        submitBtn.className = 'hide';
        updateBtn.className = 'show';

    }


    function filtrarPorTitulo(texto){
        let livrosPesquisaTitulo = livros.filter( livro => livro.title.search(texto) > -1 );

        mostrarLivros(livrosPesquisaTitulo);
    }

    function fecharPopup(){
        //popup.classList.remove('open');
        popup.classList.toggle('open');
    }

    function mostrarPopup(imgSrc){
        //popup.classList.add('open');
        popup.classList.toggle('open');
        popup.firstElementChild.src = `livros/${imgSrc}`;
    }

    function apagarLivro(id){
        //console.log('apagar livro com id: ', id);
        let novosLivros = livros.filter( livro => livro.id != id );

        livros = novosLivros;

        mostrarLivros(livros);
    }

    function filtrarLivrosLidos(checked){
        //console.log(checked);
        if(checked){
            let livrosJaLidos = livros.filter( livro => livro.alreadyRead === true );
            mostrarLivros(livrosJaLidos);
        } else {
            mostrarLivros(livros);
        }
    }

    function filtrarLivrosNaoLidos(checked){
        if(checked){
            let livrosNaoLidos = livros.filter( livro => livro.alreadyRead === false);
            mostrarLivros(livrosNaoLidos);
        } else {
            mostrarLivros(livros);
        }
        
    }

    function mostrarLivros(arrayLivros){

        grid.innerHTML = '';
    
        arrayLivros.map( (livro) => {
            grid.innerHTML += `
                <article >
                    <h1>${livro.title}</h1>
                    <h2>${livro.author}</h2>
                    <img  src='livros/${livro.imageUrl}' data-imggr='${livro.imageUrlGr}' />
                    <p> Already Read: ${livro.alreadyRead ? '✅' :'❌' }</p> 
                    <section>
                        <button class='deleteBtn' data-id=${livro.id} >Delete</button>
                        <button class='editBtn' data-id=${livro.id}>Edit</button>
                    </section>
                </article>
            `;
        
        });
    }
}
