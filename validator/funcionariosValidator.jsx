import axios from 'axios';

const funcionariosValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade mínima de caracteres é 3',
        },
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 100',
        },
    },
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 14,
            message: 'A quantidade de caracteres máxima é 14',
        },
    },
    matricula: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 4,
            message: 'A quantidade mínima de caracteres é 4'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade máxima de caracteres é 20',
        },
    },
    cargo: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
    email: {
        required: 'O campo é obrigatório',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Digite um endereço de e-mail válido',
        },
    },
    telefone: {
        required: 'O campo é obrigatório',

    },
    salario: {
        required: 'O campo é obrigatório',
        min: {
            value: 1320,
            message: 'O valor mínimo é R$1320',
        },

    },
    cep: {
        required: 'O campo é obrigatório',
        validate: {
            validarCEP: async (cep) => {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    const endereco = response.data;
                    if (endereco.erro) {
                        return 'CEP inválido';
                    }
                    // Retorna uma string vazia se o CEP for válido
                } catch (error) {
                    console.log(error);
                    return 'Erro ao validar o CEP'; // Retorna uma mensagem de erro caso ocorra algum problema na requisição
                }
            },
        },
    },
    logradouro: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
    complemento: {
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 100',
        },
    },
    numero: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade máxima de caracteres é 10',
        },
    },
    bairro: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
};

export default funcionariosValidator;
