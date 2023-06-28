import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/Io";
import funcionariosValidator from "@/validator/funcionariosValidator";
import { mask } from "remask";
import axios from "axios";

const form = () => {
    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

    useEffect(() => {

        if (query.id) {
            axios.get('/api/funcionarios/' + query.id).then(resultado => {
                const funcionario = resultado.data

                for (let atributo in funcionario) {
                    setValue(atributo, funcionario[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/funcionarios/' + dados.id, dados)
        push('/funcionarios')
    }

    const buscarEndereco = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const endereco = response.data;
            if (!endereco.erro) {
                setValue('logradouro', endereco.logradouro);
                setValue('complemento', endereco.complemento);
                setValue('bairro', endereco.bairro);
            }
        } catch (error) {
            console.log(error);
        }
    };

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina title='Cadastrar funcionários'>
            <Container>
                <Form onSubmit={handleSubmit(salvar)}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register("nome", funcionariosValidator.nome)} />
                        {errors.nome && <small>{errors.nome.message}</small>}
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control isInvalid={errors.email} type="text" {...register("email", funcionariosValidator.email)} />
                            {errors.email && <small>{errors.email.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control mask="999.999.999-99" isInvalid={errors.cpf} type="text" {...register("cpf", funcionariosValidator.cpf)} onChange={handleChange}/>
                            {errors.cpf && <small>{errors.cpf.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="matricula">
                            <Form.Label>Matrícula:</Form.Label>
                            <Form.Control mask="999999999" isInvalid={errors.matricula} type="text" {...register("matricula", funcionariosValidator.matricula)} onChange={handleChange}/>
                            {errors.matricula && <small>{errors.matricula.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cargo">
                            <Form.Label>Cargo:</Form.Label>
                            <Form.Control isInvalid={errors.cargo} type="text" {...register('cargo', funcionariosValidator.cargo)} />
                            {errors.cargo && <small>{errors.cargo.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="datanasc">
                            <Form.Label>Data de Nascimento:</Form.Label>
                            <Form.Control isInvalid={errors.datanasc} type="date" {...register('datanasc', funcionariosValidator.datanasc)} />
                            {errors.datanasc && <small>{errors.datanasc.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="telefone">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control mask="(99) 99999-9999" isInvalid={errors.telefone} type="text" {...register("telefone", funcionariosValidator.telefone)} onChange={handleChange}/>
                            {errors.telefone && <small>{errors.telefone.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cep">
                            <Form.Label>Cep:</Form.Label>
                            <Form.Control mask="99999-999"
                                isInvalid={errors.cep}
                                type="text"
                                {...register('cep', funcionariosValidator.cep)}
                                onBlur={(e) => buscarEndereco(e.target.value)} onChange={handleChange}
                            />
                            {errors.cep && <small>{errors.cep.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="logradouro">
                            <Form.Label>Logradouro:</Form.Label>
                            <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", funcionariosValidator.logradouro)} />
                            {errors.logradouro && <small>{errors.logradouro.message}</small>}
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="complemento">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", funcionariosValidator.complemento)} />
                        {errors.complemento && <small>{errors.complemento.message}</small>}
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="numero">
                            <Form.Label>Número:</Form.Label>
                            <Form.Control isInvalid={errors.numero} type="text" {...register("numero", funcionariosValidator.numero)} />
                            {errors.numero && <small>{errors.numero.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="bairro">
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", funcionariosValidator.bairro)} />
                            {errors.bairro && <small>{errors.bairro.message}</small>}
                        </Form.Group>
                    </Row>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/funcionarios'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>
            </Container>
        </Pagina>
    )
}

export default form;
