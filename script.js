function abrirCadastro() {
    document.getElementById("tela-login").classList.add("esconder");
    document.getElementById("tela-cadastro").classList.remove("esconder");
}

function abrirLogin() {
    document.getElementById("tela-cadastro").classList.add("esconder");
    document.getElementById("tela-login").classList.remove("esconder");
}

function mostrarSenha(idInput, icone) {
    const input = document.getElementById(idInput);
    
    if (input.type === "password") {
        input.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
}