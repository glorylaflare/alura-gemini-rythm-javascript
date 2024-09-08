const urlParams = new URLSearchParams(window.location.search);
const instrumentoId = urlParams.get('id');
const id = parseInt(instrumentoId, 10) - 1;
const section = document.getElementById("principal_info");
let resultados = "";

section.innerHTML = `
    <div class="principal-titulo-detalhes" style="background-image: url(${instrumentos[id].imagemBackground});">
        <h1>${instrumentos[id].nome}</h1>
    </div>
    <div>
        <p>${instrumentos[id].historia.descricao}</p>
        <a href="${instrumentos[id].historia.link}" class="saiba-mais">Wiki | Aprenda mais</a>
    </div>
    <h3>Vantagens</h3>
    <ul>
        <li>${instrumentos[id].vantagens[0]}</li>
        <li>${instrumentos[id].vantagens[1]}</li>
    </ul>
    <h3>Desvantagens</h3>
    <ul>
        <li>${instrumentos[id].desvantagens}</li>
    </ul>
    <h2>Aprenda a tocar</h2>
    <div class="video-container">
        <iframe width="560" height="315" src="${instrumentos[id].videoAula}" frameborder="0" allowfullscreen></iframe>
    </div>
    <h3>Músicas para se inspirar</h3>
    <div class="principal-detalhes-musicas">
        <div class="video-container">
            <iframe width="560" height="315" src="${instrumentos[id].musicasExemplos[0].link}" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-container">
            <iframe width="560" height="315" src="${instrumentos[id].musicasExemplos[1].link}" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <h3>Instrumentos similares</h3>
    <p>${instrumentos[id].instrumentosSimilares[0]} e ${instrumentos[id].instrumentosSimilares[1]}</p>
`;