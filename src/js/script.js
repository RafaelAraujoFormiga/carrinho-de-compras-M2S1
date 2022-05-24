
// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {

//Valor
const precoTotal = document.querySelector('#precoTotal')

precoTotal.innerText = ""

//Criando array com os valores do preco
let soma =  listaProdutos.map(item => item.preco)
//Somando todos os valores desse array
precoTotal.innerText = soma.reduce((total, valor) => total + valor);
//

    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        // Adicionando li ao HTML
        ul.appendChild(li);

    });
}
montarListaProdutos(produtos)

//Filtrar por Hortifruti
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    montarListaProdutos(listaHortifruti);
}
// Selecionando botao em nosso HTML
 const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


//Mostrar tudo
function RetornarATodos() {

   montarListaProdutos(produtos);
}
// Selecionando botao em nosso HTML
 const botaoMostraTudo = document.querySelector('.estiloGeralBotoes--mostrarTodos');
// Adicionando event listener de clique, e executando a função de filtro
botaoMostraTudo.addEventListener('click', RetornarATodos);


//Pesquisar
function filtrarPorNome() {

    const input = document.querySelector('.campoBuscaPorNome')

    const listaNome = produtos.filter((produto) => {
        return produto.nome === input.value;
    });

    montarListaProdutos(listaNome);
}
// Selecionando botao em nosso HTML
 const botaoMostraProduto = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
// Adicionando event listener de clique, e executando a função de filtro
botaoMostraProduto.addEventListener('click', filtrarPorNome);

