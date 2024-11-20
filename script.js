document.addEventListener('DOMContentLoaded', async function () {
    const selectDepartamento = document.getElementById('departamento');

    if (selectDepartamento) {
        const departamentos = await obterDepartamentos();

        departamentos.forEach(departamento => {
            let option = document.createElement('option');
            option.value = departamento.sigla;
            option.textContent = departamento.nome;

            selectDepartamento.appendChild(option)
        });
    }

    const usernameElement = document.getElementById("username")    
    if(usernameElement){
        const receberUsuario = window.localStorage.getItem("usuario")
        usernameElement.innerText = receberUsuario
    }

});


function obterDepartamentos() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/departamentos',
            headers: { 'Content-Type': 'application/json' },
            xhrFields: {
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); // Retorna a lista de departamentos
            },
            error: function (error) {
                console.log('Falha ao obter departamentos', error);
                reject(error);
            }
        });
    });
}

function login(event) {
    event.preventDefault();
    
    const data = Object.fromEntries(new FormData(event.target).entries()); // pega os dados do formulario e converte para um objeto JS
    
    const email = data.email    
    const password = data.senha
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    // Valida se a senha informada pelo usuario deu match com o padrão do regex
    if(!regex.test(password)){
        alert('Sua senha tem que ter pelo menos letras maiuculas e minsuculas, numeros, caracteres especiais@!$&.')
        return // O return é para sair do método de login e não executar mais nenhum comando dessa função
    }

    $.ajax({
        method: 'POST', //inseri ou envia informações
        url: 'http://localhost:8080/login',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
            username: email,
            password: password,
        },
        xhrFields: {
            withCredentials: true // Incluir credenciais para armazenamento de cookies
        },
        success: function(resposta) {
            // pegar o JSON da resposta do endpoint
            
            const roles = resposta.roles
            const papelUsuario = roles[0]
            const nomeUsuario = resposta.username

            window.localStorage.setItem('usuario', nomeUsuario)


            if (papelUsuario === 'ADMIN'){
                window.location.href = '/Perfis/Admnistrador/Componentes/Central/central.html'
            }
            else if (papelUsuario === 'DEPARTAMENTO_CHEFE'){
                window.location.href = '/Perfis/Gestor/Componentes/Central/central.html'                
            }
            else if (papelUsuario === 'CONTROLE_QUALIDADE') {
                window.location.href = '/Perfis/Controlador/Componentes/Central/central.html'
            }
            else{
                window.location.href = '/Perfis/Usuario/Componentes/Central/central.html'
            }  
            
        },
        error: function (error) {
            console.log('Login falhou', error);
            window.alert('Login Falhou')
            reject(error);
        }
    });
}