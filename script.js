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

// NOVO: Lógica de Finalização
function entrar() {
    const usuario = document.getElementById("usuario-login").value;
    if (usuario) {
        alert("Bem-vindo, " + usuario + "! Login realizado com sucesso. 🚀");
    } else {
        alert("Por favor, preencha os campos corretamente. ⚠️");
    }
}

function criarConta() {
    alert("Conta criada com sucesso! Agora você pode fazer login. ✅");
    abrirLogin();
}