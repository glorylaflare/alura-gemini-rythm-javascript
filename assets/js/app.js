const section = document.getElementById("cartoes_resultado");
const input = document.getElementById("campo-pesquisa");
const btnPesquisa = document.getElementById("btn-pesquisar");
const filtroTodos = document.getElementById("mostrar-todos");

function pesquisar() {
    let campoPesquisa = input.value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um instrumento.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";

    for (let instrumento of instrumentos) {
        nome = instrumento.nome.toLowerCase();
        descricao = instrumento.historia.descricao.toLowerCase();
        tipo = instrumento.tipo.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tipo.includes(campoPesquisa)) {
            resultados += `
            <div class="cartao tipo-${instrumento.tipo}">
                <img src="${instrumento.imagemIcon}" alt="${instrumento.nome}">
                <div class="cartao-descricao">
                    <h2>${instrumento.nome}</h2>
                    <p>${instrumento.historia.descricao}</p>
                    <a href="./detalhes.html?id=${instrumento.id}">Ver detalhes</a>
                </div>
            </div>
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Infelizmente esse instrumento não existe no banco de dados.</p>"
    }

    section.innerHTML = resultados;
}

function mostrarTodos() {
    let resultados = "";

    for (let instrumento of instrumentos) {
        resultados += `
        <div class="cartao tipo-${instrumento.tipo}">
            <img src="${instrumento.imagemIcon}" alt="${instrumento.nome}">
            <div class="cartao-descricao">
                <h2>${instrumento.nome}</h2>
                <p>${instrumento.historia.descricao}</p>
                <a href="./detalhes.html?id=${instrumento.id}">Ver detalhes</a>
            </div>
        </div>
        `
    }

    section.innerHTML = resultados;
}

btnPesquisa.addEventListener("click", pesquisar);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { 
        e.preventDefault(); 
        pesquisar();
    }
});

filtroTodos.addEventListener("click", mostrarTodos);

const filtrarIcon = document.querySelector(".filtrar");
const filtrosMenu = document.querySelector(".filtros");

filtrarIcon.addEventListener("click", () => {
    if (filtrosMenu.style.display === "none" || filtrosMenu.style.display === "") {
        filtrosMenu.style.display = "block";
    } else {
        filtrosMenu.style.display = "none";
    }
});