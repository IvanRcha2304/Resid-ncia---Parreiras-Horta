import { criarDepartamento } from "../../../../../script.js";


function salvarDepartamento(event) {
    event.preventDefault(); 
    const nome = document.querySelector("input[name='colaborador']:nth-of-type(1)").value;
    const codigo = document.querySelector("input[name='colaborador']:nth-of-type(2)").value;
    const tipo = document.querySelector("select[name='status']:nth-of-type(1)").value;
    const quantidadeGestores = document.querySelector("select[name='status']:nth-of-type(2)").value;

    
    if (nome === "" || codigo === "" || tipo === "select" || quantidadeGestores === "select") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

 
    criarDepartamento(nome, codigo, tipo, quantidadeGestores)
        .then(response => {
            alert("Departamento cadastrado com sucesso!");
            document.getElementById('departamento_add-form').reset(); 
        })
        .catch(error => {
            console.error('Erro ao cadastrar departamento:', error);
            alert("Ocorreu um erro ao cadastrar o departamento. Tente novamente.");
        });
}


document.getElementById('departamento_add-form').addEventListener('submit', salvarDepartamento);
