function validar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mensagem = "";
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    if (!validateEmail(email)) {
        mensagem += "Email inválido!<br>";
    }
    if (password.length < 8) {
        mensagem += "Palavra-chave deve ter pelo menos 8 carateres!<br>";
    }

    if (mensagem == "") {
        window.location = "stock.html";
    }
    document.getElementById("message").innerHTML = mensagem;
}