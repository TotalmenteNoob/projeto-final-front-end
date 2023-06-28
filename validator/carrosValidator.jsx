const carrosValidator = {
    marca: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
    modelo: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
    quilometragem: {
        required: 'O campo é obrigatório',
        min: {
            value: 0,
            message: 'O valor mínimo é 0',
        },
        max: {
            value: 999999,
            message: 'O valor máximo é 999999',
        },
    },
    placa: {
        required: 'O campo é obrigatório',
        validate: {
            formatoPlaca: (value) => {
                const regexAntigo = /^[A-Z]{3}-\d{4}$/;
                const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

                if (regexAntigo.test(value) || regexMercosul.test(value)) {
                    return true;
                }

                return 'Digite uma placa válida no formato AAA-9999 ou ABC1D23';
            },
        },
    },

    ano: {
        required: 'O campo é obrigatório',
        min: {
            value: 1900,
            message: 'O valor mínimo é 1900',
        },
        max: {
            value: new Date().getFullYear(),
            message: 'O valor máximo é o ano atual',
        },
    },

    tipoCarro: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
    
    cor: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50',
        },
    },
};

export default carrosValidator;
