import axios from 'axios';

const locadorasValidator = {
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

export default locadorasValidator;
