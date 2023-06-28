const clientesValidator = {
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
            value: 11,
            message: 'A quantidade de caracteres máxima é 11',
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
        minLength: {
            value: 11,
            message: 'Digite um número de telefone válido',
        },
        maxLength: {
            value: 11,
            message: 'Digite um número de telefone válido',
        },
    },
    cep: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 11,
            message: 'Digite um cep válido',
        },
        maxLength: {
            value: 11,
            message: 'Digite cep válido',
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

export default clientesValidator;
