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
export function registrarUsuario(nome, senha, chaveAcesso) {
    return new Promise((resolve, reject) => {
        try {
            const usuarios = getLocalStorageItem("usuarios");
            const novoUsuario = {
                id: getNextId("usuarios"),
                nome,
                senha,
                chaveAcesso, // Administrador, Gestor, Controlador ou Usuário
            };
            usuarios.push(novoUsuario);
            setLocalStorageItem("usuarios", usuarios);
            resolve(novoUsuario);
        } catch (error) {
            reject(error);
        }
    });
}

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

// API Simulada: Departamentos
export function criarDepartamento(nome, sigla) {
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

export function obterDepartamentos() {
    return new Promise((resolve, reject) => {
        try {
            const departamentos = getLocalStorageItem("departamentos");
            resolve(departamentos);
        } catch (error) {
            reject(error);
        }
    });
}

export function obterDepartamentoPorId(id) {
    return new Promise((resolve, reject) => {
        try {
            const departamentos = getLocalStorageItem("departamentos");
            const departamento = departamentos.find(dep => dep.id === id);
            resolve(departamento);
        } catch (error) {
            reject(error);
        }
    });
}

// API Simulada: Não Conformidades
export function criarNaoConformidade(usuarioNome, statusId, departamentoId, dataAbertura) {
    return new Promise((resolve, reject) => {
        try {
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
            resolve(novaNaoConformidade);
        } catch (error) {
            reject(error);
        }
    });
}

export function obterNaoConformidades() {
    return new Promise((resolve, reject) => {
        try {
            const naoConformidades = getLocalStorageItem("naoConformidades");
            resolve(naoConformidades);
        } catch (error) {
            reject(error);
        }
    });
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const selectDepartamento = document.getElementById('departamento');
        const usernameElement = document.getElementById("username");
        const bodyListaNaoConformidades = document.getElementsByClassName("ListaDeNaoConformidades")[0];

        // Populando dropdown de departamentos
        if (selectDepartamento) {
            const departamentos = await obterDepartamentos();
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
        if (bodyListaNaoConformidades) {
            const naoConformidades = await obterNaoConformidades();
            naoConformidades.forEach(async naoConformidade => {
                const tr = document.createElement('tr');
                const departamento = await obterDepartamentoPorId(naoConformidade.departamentoId);

                tr.innerHTML = `
                    <td>${naoConformidade.usuarioNome}</td>
                    <td>${new Date(naoConformidade.dataAbertura).toLocaleDateString("pt-BR")}</td>
                    <td>${naoConformidade.statusId}</td>
                    <td>${departamento ? departamento.sigla : "Desconhecido"}</td>
                    <td class="botoes-acao">
                        <button id='${naoConformidade.id}' class="btn edit-btn">
                            <i class="fas fa-pen"></i>
                            <span class="tooltip">Editar</span>
                        </button>
                        <button id='${naoConformidade.id}' class="btn delete-btn">
                            <i class="fas fa-trash"></i>
                            <span class="tooltip">Apagar</span>
                        </button>
                    </td>
                `;

                tr.querySelector('.edit-btn').addEventListener('click', () => {
                    window.location.href = `/editar.html?id=${naoConformidade.id}`;
                });

                bodyListaNaoConformidades.appendChild(tr);
            });
        }
    } catch (error) {
        console.error("Erro ao inicializar a página:", error);
    }
});
