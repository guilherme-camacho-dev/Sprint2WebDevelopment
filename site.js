const elementos = document.querySelectorAll(".fade");

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






const imagens = [
    "imagens/tucunare.jpg",
    "imagens/estudo-2.jpg",
    "imagens/foto_rg.jpg",
    "imagens/jovi_brasil.jpg",
    "imagens/IAfacial.jpg"
];









let i = 0;

const img = document.getElementById("imgCarrossel");

function atualizar(){
    img.src = imagens[i];
}

function proximaImagem(){
    i = (i + 1) % imagens.length;
    atualizar();
}

function voltarImagem(){
    i = (i - 1 + imagens.length) % imagens.length;
    atualizar();
}

setInterval(proximaImagem, 3000);

window.addEventListener("load", atualizar);