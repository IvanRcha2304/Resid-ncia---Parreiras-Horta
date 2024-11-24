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

   
    const BodyListaNaoConformidades = document.getElementsByClassName("ListaDeNaoConformidades")[0]
    if(BodyListaNaoConformidades){
        const naoConformidades = await obterNaoConformidades();

        naoConformidades.forEach(async (naoConformidade) => {
            const tr = document.createElement('tr');
            const statusNaoConformidades = await obterStatusNaoConformidadesPorId(naoConformidade.statusId)
            const departamento = await obterDepartamentoPorId(naoConformidade.departamentoId)
            const dataAbertura = new Date(naoConformidade.dataAbertura)

            tr.innerHTML = `
                <td>${naoConformidade.usuarioNome}</td>
                <td>${dataAbertura.toLocaleDateString("pt-BR")}</td>
                <td>${statusNaoConformidades.nome}</td>
                <td>${departamento.sigla}</td>
                <td class="botoes-acao">
                    <button id='${naoConformidade.id}' class="btn edit-btn">
                        <i class="fas fa-pen"></i>
                        <span class="tooltip">Editar</span>
                    </button>
                    <button id='${naoConformidade.id}' class="btn confirm-btn">
                        <i class="fas fa-check"></i>
                        <span class="tooltip">Confirmar</span>
                    </button>
                    <button id='${naoConformidade.id}' class="btn cancel-btn">
                        <i class="fas fa-times"></i>
                        <span class="tooltip">Cancelar</span>
                    </button>
                    <button id='${naoConformidade.id}' class="btn delete-btn">
                        <i class="fas fa-trash"></i>
                        <span class="tooltip">Apagar</span>
                    </button>
                </td>
            `

            tr.querySelector('.edit-btn').addEventListener('click', () => {
                window.location.href = `/Perfis/Admnistrador/Componentes/MinhasChamdas/editar-minhas-chamadas.html?id=${naoConformidade.id}`;
            });

            BodyListaNaoConformidades.appendChild(tr)
        }

        )
    }
});


<<<<<<< HEAD
function obterDepartamentos() {
=======
export function obterDepartamentos() {
>>>>>>> b6d9132 (.)
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/departamentos',
            headers: { 'Content-Type': 'application/json' },
            xhrFields: {
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
<<<<<<< HEAD
                resolve(result); // Retorna a lista de departamentos
=======
                v // Retorna a lista de departamentos
>>>>>>> b6d9132 (.)
            },
            error: function (error) {
                console.log('Falha ao obter departamentos', error);
                reject(error);
            }
        });
    });
}

<<<<<<< HEAD
function login(event) {
=======
export function login(event) {
>>>>>>> b6d9132 (.)
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


<<<<<<< HEAD
function obterNaoConformidades() {
=======
export function obterNaoConformidades() {
>>>>>>> b6d9132 (.)
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/nao-conformidades',
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { //informa para a API que o usuario esta autenticado
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); // Retorna a lista de nao-conformidades
            },
            error: function (error) {
                console.log('Falha ao obter lista de não-conformidades', error);
                reject(error);
            }
        });
    });
}

function obterStatusNaoConformidadesPorId(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost:8080/api/status-nao-conformidades/${id}`,
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { //informa para a API que o usuario esta autenticado
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); 
            },
            error: function (error) {
                console.log('Falha ao obter status não-conformidade', error);
                reject(error);
            }
        });
    });
}

function obterDepartamentoPorId(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost:8080/api/departamentos/${id}`,
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { //informa para a API que o usuario esta autenticado
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); 
            },
            error: function (error) {
                console.log('Falha ao obter departamentos', error);
                reject(error);
            }
        });
    });
<<<<<<< HEAD
}
=======
}

export function registrarUsuario(email, password) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/register',
            data: { email, password },
            success: function (response) {
                resolve(response); // Usuário registrado com sucesso
            },
            error: function (error) {
                console.error('Erro ao registrar usuário:', error);
                reject(error);
            }
        });
    });
}

export function obterUsuarios() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/users',
            headers: { 'Content-Type': 'application/json' },
            success: function (result) {
                resolve(result);
            },
            error: function (error) {
                console.error('Erro ao obter usuários:', error);
                reject(error);
            }
        });
    });
}

export function obterUsuarioPorId(userId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost:8080/api/users/${userId}`,
            headers: { 'Content-Type': 'application/json' },
            success: function (result) {
                resolve(result);
            },
            error: function (error) {
                console.error('Erro ao obter usuário por ID:', error);
                reject(error);
            }
        });
    });
}

export function criarDepartamento(nome, sigla) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/api/departamentos',
            contentType: 'application/json',
            data: JSON.stringify({ nome, sigla }),
            success: function (response) {
                resolve(response); 
            },
            error: function (error) {
                console.error('Erro ao criar departamento:', error);
                reject(error);
            }
        });
    });
}

export function editarDepartamento(departamentoId, nome, sigla) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'PUT',
            url: `http://localhost:8080/api/departamentos/${departamentoId}`,
            contentType: 'application/json',
            data: JSON.stringify({ nome, sigla }),
            success: function (response) {
                resolve(response); 
            },
            error: function (error) {
                console.error('Erro ao atualizar departamento:', error);
                reject(error);
            }
        });
    });
}

export function criarGrauDeSeveridade(nome, cor, descricao) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/api/graus-severidade',
            contentType: 'application/json',
            data: JSON.stringify({ nome, cor, descricao }),
            success: function (response) {
                resolve(response); 
            },
            error: function (error) {
                console.error('Erro ao criar grau de severidade:', error);
                reject(error);
            }
        });
    });
}

export function atualizarGrauDeSeveridade(grauId, nome, cor, descricao) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'PUT',
            url: `http://localhost:8080/api/graus-severidade/${grauId}`,
            contentType: 'application/json',
            data: JSON.stringify({ nome, cor, descricao }),
            success: function (response) {
                resolve(response); 
            },
            error: function (error) {
                console.error('Erro ao atualizar grau de severidade:', error);
                reject(error);
            }
        });
    });
}

export function obterGrausDeSeveridade() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/graus-severidade',
            headers: { 'Content-Type': 'application/json' },
            success: function (result) {
                resolve(result); 
            },
            error: function (error) {
                console.error('Erro ao obter graus de severidade:', error);
                reject(error);
            }
        });
    });
}

export function obterNaoConformidades() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/api/nao-conformidades',
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { 
                withCredentials: true 
            },
            success: function (result) {
                resolve(result); 
            },
            error: function (error) {
                console.log('Falha ao obter lista de não-conformidades', error);
                reject(error);
            }
        });
    });
}

export function obterStatusNaoConformidadesPorId(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost:8080/api/status-nao-conformidades/${id}`,
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { // Informa para a API que o usuário está autenticado
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); // Retorna o status de não-conformidade
            },
            error: function (error) {
                console.log('Falha ao obter status não-conformidade', error);
                reject(error);
            }
        });
    });
}

export function obterDepartamentoPorId(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost:8080/api/departamentos/${id}`,
            headers: { 'Content-Type': 'application/json' },
            xhrFields: { // Informa para a API que o usuário está autenticado
                withCredentials: true // Incluir credenciais para envio de cookies
            },
            success: function (result) {
                resolve(result); // Retorna o departamento por ID
            },
            error: function (error) {
                console.log('Falha ao obter departamento', error);
                reject(error);
            }
        });
    });
}
>>>>>>> b6d9132 (.)
