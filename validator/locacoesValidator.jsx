const locacoesValidator = {
    custo: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade mínima de caracteres é 3',
        },
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 100',
        },
    }
}

export default locacoesValidator;
