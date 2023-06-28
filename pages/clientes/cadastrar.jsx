import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import clientesValidator from '@/validator/clientesValidator';
import { mask } from 'remask';
import axios from 'axios';

const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    function salvar(dados) {
        axios.post('/api/clientes', dados)
        push('/clientes')
    }

    return (
        <Pagina title='Cadastrar clientes'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register("nome", clientesValidator.nome)} />
                        {errors.nome && <small>{errors.nome.message}</small>}
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control isInvalid={errors.email} type="text" {...register("email", clientesValidator.email)} />
                            {errors.email && <small>{errors.email.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", clientesValidator.cpf)}  />
                            {errors.cpf && <small>{errors.cpf.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="datanasc">
                            <Form.Label>Data de Nascimento:</Form.Label>
                            <Form.Control isInvalid={errors.datanasc} type="date" {...register('datanasc', clientesValidator.datanasc)} />
                            {errors.datanasc && <small>{errors.datanasc.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="telefone">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", clientesValidator.telefone)} />
                            {errors.telefone && <small>{errors.telefone.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cep">
                            <Form.Label>Cep:</Form.Label>
                            <Form.Control isInvalid={errors.cep} type="text" {...register("cep", clientesValidator.cep)}  />
                            {errors.cep && <small>{errors.cep.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="logradouro">
                            <Form.Label>Logradouro:</Form.Label>
                            <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", clientesValidator.logradouro)} />
                            {errors.logradouro && <small>{errors.logradouro.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="complemento">
                            <Form.Label>Complemento:</Form.Label>
                            <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", clientesValidator.complemento)} />
                            {errors.complemento && <small>{errors.complemento.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="numero">
                            <Form.Label>Número:</Form.Label>
                            <Form.Control isInvalid={errors.numero} type="text" {...register("numero", clientesValidator.numero)} />
                            {errors.numero && <small>{errors.numero.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="bairro">
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", clientesValidator.bairro)} />
                            {errors.bairro && <small>{errors.bairro.message}</small>}
                        </Form.Group>
                    </Row>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/clientes'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
