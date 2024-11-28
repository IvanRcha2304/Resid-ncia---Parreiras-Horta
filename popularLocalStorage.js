document.addEventListener('DOMContentLoaded', function () {

    setLocalStorageItem('loginResponse', dadosLogin())
    setLocalStorageItem('naoConformidades', dadosNaoConformidades())
    setLocalStorageItem('statusNaoConformidades', dadosStatusNaoConformidades())
    setLocalStorageItem('departamentos', dadosDepartamentos())
})

function dadosLogin(){
    const loginResponse = {
        "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
        "passwordChanged": true,
        "roles": [
            "ADMIN"
        ],
        "credentialsNonExpired": true,
        "accountNonExpired": true,
        "id": 0,
        "email": "string",
        "enabled": true,
        "authorities": [
            {
                "authority": "ADMIN"
            }
        ],
        "username": "admin@gmail.com",
        "accountNonLocked": true
    } 

    return loginResponse
}

function dadosNaoConformidades(){
    const naoConformidadesResponse = [
        {
            "id": 1,
            "assunto": 14,
            "descricao": "nova não conformidade feita agora",
            "dataAbertura": "2024-11-01T20:07:00",
            "origemNaoConformidade": "Interna",
            "tipoNaoConformidadeId": 0,
            "statusId": 3,
            "grausSeveridadeId": 3,
            "departamentoId": 1,
            "usuarioNome": "Joelma Santos",
            "usuarioCriador": {
                "id": 1,
                "email": "admin@gmail.com",
                "password": "$2a$10$Bm55n3rvGYQPiJIT0b6Oiu6kSYnMIF9D78vrm0C91adZ2cfs11tq.",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-01T20:09:58.690205",
            "dataHoraUltimaAlteracao": "2024-11-01T20:09:58.690205"
        },
        {
            "id": 2,
            "assunto": 14,
            "descricao": "nova não conformidade feita agora",
            "dataAbertura": "2024-11-01T20:07:00",
            "origemNaoConformidade": "Interna",
            "tipoNaoConformidadeId": 0,
            "statusId": 2,
            "grausSeveridadeId": 3,
            "departamentoId": 4,
            "usuarioNome": "Mario Joaquim",
            "usuarioCriador": {
                "id": 1,
                "email": "admin@gmail.com",
                "password": "$2a$10$Bm55n3rvGYQPiJIT0b6Oiu6kSYnMIF9D78vrm0C91adZ2cfs11tq.",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-01T20:12:44.635839",
            "dataHoraUltimaAlteracao": "2024-11-01T20:12:44.635839"
        },
        {
            "id": 3,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 1,
            "grausSeveridadeId": 2,
            "departamentoId": 2,
            "usuarioNome": "Wetany Real",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:41:59.097713",
            "dataHoraUltimaAlteracao": "2024-11-20T17:41:59.097713"
        },
        {
            "id": 4,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 2,
            "grausSeveridadeId": 2,
            "departamentoId": 7,
            "usuarioNome": "Mario Joaquim",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:45:25.528665",
            "dataHoraUltimaAlteracao": "2024-11-20T17:45:25.528665"
        },
        {
            "id": 5,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 1,
            "grausSeveridadeId": 2,
            "departamentoId": 5,
            "usuarioNome": "Alírio Chaves",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:45:25.528665",
            "dataHoraUltimaAlteracao": "2024-11-20T17:45:25.528665"
        },
        {
            "id": 6,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 3,
            "grausSeveridadeId": 2,
            "departamentoId": 8,
            "usuarioNome": "Nathan Lima",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:45:25.528665",
            "dataHoraUltimaAlteracao": "2024-11-20T17:45:25.528665"
        },
        {
            "id": 7,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 1,
            "grausSeveridadeId": 2,
            "departamentoId": 3,
            "usuarioNome": "Augusto Macedo",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:45:25.528665",
            "dataHoraUltimaAlteracao": "2024-11-20T17:45:25.528665"
        },
        {
            "id": 8,
            "assunto": 5,
            "descricao": "",
            "dataAbertura": "2024-11-15T21:35:39.572",
            "origemNaoConformidade": "string",
            "tipoNaoConformidadeId": 1,
            "statusId": 1,
            "grausSeveridadeId": 2,
            "departamentoId": 4,
            "usuarioNome": "Mirele Lima",
            "usuarioCriador": {
                "id": 8,
                "email": "admin@gmail.com",
                "password": "$2a$10$3aBu28QQDvdVZz4d.K1dSeGZodOTrMy3kcgTIVZCRIr534pmsALTu",
                "roles": [
                    "ADMIN"
                ],
                "enabled": true,
                "accountNonLocked": true,
                "username": "admin@gmail.com",
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonExpired": true,
                "credentialsNonExpired": true,
                "passwordChanged": false
            },
            "dataHoraCriacao": "2024-11-20T17:45:25.528665",
            "dataHoraUltimaAlteracao": "2024-11-20T17:45:25.528665"
        }
    ]

    return naoConformidadesResponse
}

function dadosStatusNaoConformidades(){
    const statusNaoConformidades = [
        {
            "id": 1,
            "nome": "Ativo",
            "descricao": ""
        },
        {
            "id": 2,
            "nome": "Pendente",
            "descricao": ""
        },
        {
            "id": 3,
            "nome": "Em Espera",
            "descricao": ""
        }
    ]

    return statusNaoConformidades
}

function dadosDepartamentos(){
    const departamentos = [
        {
            "id": 1,
            "nome": "CONTIN",
            "sigla": "CONTIN"
        },
        {
            "id": 2,
            "nome": "ASTEC",
            "sigla": "ASTEC"
        },
        {
            "id": 3,
            "nome": "ASCAP",
            "sigla": "ASCAP"
        },
        {
            "id": 4,
            "nome": "PROJUR",
            "sigla": "PROJUR"
        },
        {
            "id": 5,
            "nome": "AGEQ",
            "sigla": "AGEQ"
        },
        {
            "id": 6,
            "nome": "ASPLAN",
            "sigla": "ASPLAN"
        },
        {
            "id": 7,
            "nome": "CONFIN",
            "sigla": "CONFIN"
        },
        {
            "id": 8,
            "nome": "ASCOM",
            "sigla": "ASCOM"
        }
    ]

    return departamentos
}