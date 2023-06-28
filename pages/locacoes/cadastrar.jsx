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
import locacoesValidator from '@/validator/locacoesValidator';
import { mask } from 'remask';
import axios from 'axios';

const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    function salvar(dados) {
        axios.post('/api/locacoes', dados)
        push('/locacoes')
    }

    return (
        <Pagina title='Cadastrar locação'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="custo">
                        <Form.Label>Custo:</Form.Label>
                        <Form.Control isInvalid={errors.custo} type="text" {...register("custo", locacoesValidator.custo)} />
                        {errors.custo && <small>{errors.custo.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="inicioLocacao">
                        <Form.Label>Início da locação:</Form.Label>
                        <Form.Control isInvalid={errors.inicioLocacao} type="date" {...register('inicioLocacao', locacoesValidator.inicioLocacao)} />
                        {errors.inicioLocacao && <small>{errors.inicioLocacao.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fimLocacao">
                        <Form.Label>Fim da locação:</Form.Label>
                        <Form.Control isInvalid={errors.fimLocacao} type="date" {...register('fimLocacao', locacoesValidator.fimLocacao)} />
                        {errors.fimLocacao && <small>{errors.fimLocacao.message}</small>}
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/locacoes'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
