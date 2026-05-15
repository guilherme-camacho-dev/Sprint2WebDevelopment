let usuarioSalvo = "";
let senhaSalva = "";

function mostrarSenha(id, icone){

    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
}

function abrirCadastro(){
    document.getElementById("tela-login").classList.add("esconder");
    document.getElementById("tela-cadastro").classList.remove("esconder");
}

function abrirLogin(){
    document.getElementById("tela-cadastro").classList.add("esconder");
    document.getElementById("tela-login").classList.remove("esconder");
}

function criarConta(){

    const usuario = document.getElementById("usuario-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    if(usuario === "" || senha === ""){
        alert("Preencha os campos!");
        return;
    }

    usuarioSalvo = usuario;
    senhaSalva = senha;

    alert("Conta criada com sucesso!");
    abrirLogin();
}

function entrar(){

    const usuario = document.getElementById("usuario-login").value;
    const senha = document.getElementById("senha-login").value;

    if(usuario === "" || senha === ""){
        alert("Preencha os campos!");
        return;
    }

    if(usuarioSalvo === "" || senhaSalva === ""){
        alert("Crie uma conta primeiro!");
        return;
    }

    if(usuario === usuarioSalvo && senha === senhaSalva){
        window.location.href = "site.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}