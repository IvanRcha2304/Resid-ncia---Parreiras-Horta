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

});

function obterDepartamentos() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/login',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                username: 'elisandralima.9336@gmail.com',
                password: '123456'
            },
            xhrFields: {
                withCredentials: true // Incluir credenciais para armazenamento de cookies
            },
            success: function () {
                console.log('Login efetuado com sucesso');

                // Após o login, chamar requestObterDepartamentos
                requestObterDepartamentos().then(resolve).catch(reject);
            },
            error: function (error) {
                console.log('Login falhou', error);
                reject(error);
            }
        });
    });
}

function requestObterDepartamentos() {
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
