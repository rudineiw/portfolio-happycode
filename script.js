function validateForm() {
    var nome = document.getElementById('nome').value;
    if (nome == "") {
        document.querySelector('.status').innerHTML = '<span class="erro">Informe o seu nome!</span>';
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = '<span class="erro">Informe seu e-mail de contato!</span>';
        return false;
    } else {
        var valEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!valEmail.test(email)){
            document.querySelector('.status').innerHTML = '<span class="erro">E-mail inválido!</span>';
            return false;
        }
    }
    var assunto = document.getElementById('assunto').value;
    if (assunto == "") {
        document.querySelector('.status').innerHTML = '<span class="erro">Informe o assunto!</span>';
        return false;
    }
    var mensagem = document.getElementById('mensagem').value;
    if (mensagem == "") {
        document.querySelector('.status').innerHTML = '<span class="erro">Mensagem precisa ser preenchida!</span>';
        return false;
    }
    document.querySelector('.status').innerHTML = '<span class="ok">Enviando...</span>';
}