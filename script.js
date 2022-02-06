// Vitória Borges Fontoura
function handleForm() {
    let isValid = true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone =  document.getElementById("phone");
    let message = document.getElementById("message");
    // let select = document.getElementById("select");

    //Verifica Nome
    if ((name.value.lenght < 2) || (name.value === "")){
        name.classList.toggle("invalid");
        document.querySelector("span.name-edit").innerText = "Insira um nome com mais de 2 caracteres";
        isValid = false;
    } else {
        name.classList.toggle("invalid");
        document.querySelector("span.name-edit").innerText = "Nome";
    }

    //Verifica Telefone
    if ((phone.value === "") || (phone.length < 11)) {
        phone.classList.toggle("invalid");
        document.querySelector("span.phone-edit").innerText = "Exemplo: 21998545621";
        isValid = false;
    } else {
        name.classList.toggle("invalid");
        document.querySelector("span.phone-edit").innerText = "Telefone";
    }

    //Verifica E-mail
    user = email.value.substring(0, email.value.indexOf("@"));
    domain = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if ((user.length >=1) &&
        (domain.length >=3) &&
        (user.search("@")==-1) &&
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) &&
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&
        (domain.indexOf(".") >=1)&&
        (domain.lastIndexOf(".") < domain.length - 1)) {
        
        document.querySelector("span.email-edit").innerHTML="E-mail válido";
    } else {
        document.querySelector("span.email-edit").innerHTML="E-mail inválido";
        email.classList.toggle("invalid");
        isValid = false;
    }

    //Verifica Mensagem
    if (message.value === "") {
        message.focus();
        message.classList.add("invalid");
        
        document.querySelector("span.message-edit").innerText = "Digite aqui";
        isValid = false;
        
    } else {
        message.classList.remove("invalid");
        document.querySelector("span.message-edit").innerText = "Mensagem";
    }

    //Verifica se todos os campos foram preenchidos
    if (isValid) {
        return alert("Tudo está OK!");
    } else {
        return alert("Preencha todos os campos por favor.");
    }
}


window.onload = function() {
    const submitButton = document.getElementById("submitButton");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone =  document.getElementById("phone");
    let message = document.getElementById("message");

    submitButton.addEventListener("click", handleForm);
    
    message.addEventListener("change", () => {
        if (message.value != "") {
            message.classList.add("message-ontext");
            message.classList.remove("invalid");
            document.querySelector("span.message-edit").innerHTML="Mensagem"
            
        } else {
            message.classList.toggle("message-ontext");
        }
    })

    email.addEventListener("change", () => {

        if (email.value != "") {
            user = email.value.substring(0, email.value.indexOf("@"));
            domain = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
            if ((user.length >=1) &&
                (domain.length >=3) &&
                (user.search("@")==-1) &&
                (domain.search("@")==-1) &&
                (user.search(" ")==-1) &&
                (domain.search(" ")==-1) &&
                (domain.search(".")!=-1) &&
                (domain.indexOf(".") >=1)&&
                (domain.lastIndexOf(".") < domain.length - 1)) {

                email.classList.add("field-ontext");
                email.classList.remove("invalid");
                
                document.querySelector("span.email-edit").innerHTML="E-mail válido";

            } else {
                document.querySelector("span.email-edit").innerHTML="E-mail inválido";
                email.classList.add("invalid");
            }
        }

    })
}


