// Funções genéricas para manipular o localStorage
function getNextId(key) {
    const currentId = localStorage.getItem(`${key}_id`) || 0;
    const nextId = parseInt(currentId, 10) + 1;
    localStorage.setItem(`${key}_id`, nextId);
    return nextId;
}

function getLocalStorageItem(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function setLocalStorageItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Função para registrar novo usuário
function registrarUsuario(nome, senha, chaveAcesso) {
    const usuarios = getLocalStorageItem("usuarios");
    const novoUsuario = {
        id: getNextId("usuarios"),
        nome,
        senha,
        chaveAcesso, // Administrador, Gestor, Controlador ou Usuário
    };
    usuarios.push(novoUsuario);
    setLocalStorageItem("usuarios", usuarios);
    return novoUsuario;
}


// API Simulada: Departamentos
function criarDepartamento(nome, sigla) {
    return new Promise((resolve, reject) => {
        try {
            const departamentos = getLocalStorageItem("departamentos");
            const novoDepartamento = { id: getNextId("departamentos"), nome, sigla };
            departamentos.push(novoDepartamento);
            setLocalStorageItem("departamentos", departamentos);
            resolve(novoDepartamento);
        } catch (error) {
            reject(error);
        }
    });
}

function obterDepartamentos() {
    const departamentos = getLocalStorageItem("departamentos");
    return departamentos;
}

function obterDepartamentoPorId(id) {
    const departamentos = getLocalStorageItem("departamentos");
    const departamento = departamentos.find(dep => dep.id === id);
    return departamento;
}

// API Simulada: Não Conformidades
function criarNaoConformidade(usuarioNome, statusId, departamentoId, dataAbertura) {
    const naoConformidades = getLocalStorageItem("naoConformidades");

    const novaNaoConformidade = {
        id: getNextId("naoConformidades"),
        usuarioNome,
        statusId,
        departamentoId,
        dataAbertura,
    };

    naoConformidades.push(novaNaoConformidade);
    setLocalStorageItem("naoConformidades", naoConformidades);

    return novaNaoConformidade;
}

function obterNaoConformidades() {
    const naoConformidades = getLocalStorageItem("naoConformidades");
    return naoConformidades;
}

function atualizarNaoConformidades(naoConformidades) {
    setLocalStorageItem("naoConformidades", naoConformidades);
}

function obterNaoConformidadePorId(id) {
    const naoConformidades = getLocalStorageItem("naoConformidades");
    const naoConformidade = naoConformidades.find(item => item.id === id);

    if (!naoConformidade) {
        console.log("Não conformidade não encontrada.");
        return;
    }

    return naoConformidade;
}

function obterStatusNaoConformidadesPorId(id) {
    const statusNaoConformidades = getLocalStorageItem("statusNaoConformidades");
    const status = statusNaoConformidades.find(item => item.id === id);

    if (!status) {
        console.log("Status não conformidade não encontrada.");
        return;
    }

    return status;
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
    
    var resposta = getLocalStorageItem("loginResponse")
    
    if(resposta){
        const roles = resposta.roles
        const perfil = roles[0]

        window.localStorage.setItem('usuario', email)
        window.localStorage.setItem('perfil', perfil)
        

        if (perfil === 'ADMIN'){
            window.location.href = '/Perfis/Administrador - OK/Componentes/Central/Central.html'
        }
        else if (perfil === 'DEPARTAMENTO_CHEFE'){
            window.location.href = '/Perfis/Gestor - OK &/Componentes/Central/Central.html'                
        }
        else if (perfil === 'CONTROLE_QUALIDADE') {
            window.location.href = '/Perfis/Controlador - OK/Componentes/Central/Central.html'
        }
        else{
            window.location.href = '/Perfis/Usuario - OK/Componentes/Central/Central.html'
        }  
    } 
    else {
        console.log('Login falhou', error);
        window.alert('Login Falhou')
    }     
}

function filtrarNaoConformidades(event){
    event.preventDefault();
    
    const data = Object.fromEntries(new FormData(event.target).entries()); // pega os dados do formulario e converte para um objeto JS

    let naoConformidades = obterNaoConformidades();

    console.log('Nome: ', data.colaborador)
    if(data.colaborador !== ""){
        naoConformidades = naoConformidades.filter(item => item.usuarioNome.toUpperCase() == data.colaborador.toUpperCase())
    }

    if(data.departamento != 'select'){
        //const departamento = document.getElementById('departamento').options[data.departamento].innerText
        naoConformidades = naoConformidades.filter(item => item.departamentoId == data.departamento)
    }

    if(data.status != 'select'){
        naoConformidades = naoConformidades.filter(item => item.statusId == data.status)
    }

    limparTBodyTabela()
    montarTBodyNaoConformidade(naoConformidades)
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function () {
    try {
        const selectDepartamento = document.getElementById('departamento');
        const usernameElement = document.getElementById("username");

        // Populando dropdown de departamentos
        if (selectDepartamento) {
            const departamentos = obterDepartamentos();
            departamentos.forEach(departamento => {
                let option = document.createElement('option');
                option.value = departamento.id;
                option.textContent = departamento.nome;
                selectDepartamento.appendChild(option);
            });
        }

        // Exibindo nome do usuário logado
        if (usernameElement) {
            const usuario = localStorage.getItem("usuario");
            usernameElement.innerText = usuario || "Usuário Desconhecido";
        }

        // Listando não conformidades
        let naoConformidades = obterNaoConformidades();
        montarTBodyNaoConformidade(naoConformidades)
       
    } catch (error) {
        console.error("Erro ao inicializar a página:", error);
    }
});

function montarTBodyNaoConformidade(naoConformidades){
    if (naoConformidades) {
        const bodyListaNaoConformidades = document.getElementsByClassName("ListaDeNaoConformidades")[0];

        naoConformidades.forEach(naoConformidade => {
            const tr = document.createElement('tr');
            const departamento = obterDepartamentoPorId(naoConformidade.departamentoId);
            const statusNaoConformidade = obterStatusNaoConformidadesPorId(naoConformidade.statusId)

            tr.innerHTML = `
                <td>${naoConformidade.usuarioNome}</td>
                <td>${new Date(naoConformidade.dataAbertura).toLocaleDateString("pt-BR")}</td>
                <td>${statusNaoConformidade.nome}</td>
                <td>${departamento ? departamento.sigla : "Desconhecido"}</td>
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
            `;

            const perfil = window.localStorage.getItem('perfil')

            if (perfil === 'ADMIN' || perfil === 'DEPARTAMENTO_CHEFE'){
                tr.querySelector('.edit-btn').addEventListener('click', () => {
                    window.location.href = `/Perfis/Gestor - OK &/Componentes/Não Conformidades/Editar Não Conformidade/Editar.html?id=${naoConformidade.id}`;
                });
            }
            else if (perfil === 'CONTROLE_QUALIDADE') {
                tr.querySelector('.edit-btn').addEventListener('click', () => {
                    window.location.href = `/Perfis/Controlador - OK/Componentes/Não Conformidades/Editar Não Conformidade/Editar.html?id=${naoConformidade.id}`;
                });
            }
            else{
                tr.querySelector('.edit-btn').addEventListener('click', () => {
                    window.location.href = `/Perfis/Usuario - OK/Componentes/Editar Não Conformidade/Editar.html?id=${naoConformidade.id}`;
                });
            }  

            tr.querySelector('.delete-btn').addEventListener('click', () => {
                tr.remove()
                naoConformidades = naoConformidades.filter(item => item.id !== naoConformidade.id)
                atualizarNaoConformidades(naoConformidades)
            });
            
            bodyListaNaoConformidades.appendChild(tr);
        });
    }
}

function limparTBodyTabela(){
    const bodyListaNaoConformidades = document.getElementsByClassName("ListaDeNaoConformidades")[0];
    bodyListaNaoConformidades.innerHTML = ''
}