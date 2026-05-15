const elementos = document.querySelectorAll(".fade");

// Função para animar elementos ao scroll
function animar(){
    const altura = window.innerHeight;

    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;

        if(topo < altura - 80){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animar);
window.addEventListener("load", animar);

// Lógica do Botão de Voltar ao Topo
const btn = document.getElementById("topoBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

function voltarTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// NOVO: Lógica do Carrossel de Imagens
const imagens = ["ia.jpg", "foto_rg.jpg", "ia2.jpg"];
let index = 0;
const imgElemento = document.getElementById("imgCarrossel");

function atualizarCarrossel() {
    imgElemento.src = imagens[index];
}

function proximaImagem() {
    index = (index + 1) % imagens.length;
    atualizarCarrossel();
}

function voltarImagem() {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
}

// Inicia a primeira imagem
atualizarCarrossel();