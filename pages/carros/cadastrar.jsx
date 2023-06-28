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
import carrosValidator from '@/validator/carrosValidator';
import { mask } from 'remask';
import axios from 'axios';

const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    function salvar(dados) {
        axios.post('/api/carros', dados)
        push('/carros')
    }

    return (
        <Pagina title='Cadastrar carros'>
            <Container>

                <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="marca">
                            <Form.Label>Marca:</Form.Label>
                            <Form.Control isInvalid={errors.marca} type="text" {...register("marca", carrosValidator.marca)} />
                            {errors.marca && <small>{errors.marca.message}</small>}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="modelo">
                            <Form.Label>Modelo:</Form.Label>
                            <Form.Control isInvalid={errors.modelo} type="text" {...register("modelo", carrosValidator.modelo)} />
                            {errors.modelo && <small>{errors.modelo.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="quilometragem">
                            <Form.Label>Quilometragem:</Form.Label>
                            <Form.Control isInvalid={errors.quilometragem} type="text" {...register("quilometragem", carrosValidator.quilometragem)} />
                            {errors.quilometragem && <small>{errors.quilometragem.message}</small>}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="tipocarro">
                            <Form.Label>Tipo do carro:</Form.Label>
                            <Form.Control as="select" isInvalid={errors.tipocarro} {...register("tipocarro", carrosValidator.tipocarro)}>
                                <option selected disabled>Selecione o tipo de carro</option>
                                <option value="sedan">Sedan</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="suv">SUV</option>
                                <option value="pickup">Pickup</option>
                                <option value="van">Van</option>
                                <option value="esportivo">Esportivo</option>
                                <option value="luxo">Carro de Luxo</option>
                                <option value="compacto">Compacto</option>
                                <option value="conversivel">Conversível</option>
                                <option value="utilitario">Utilitário</option>
                                <option value="outro">Outro</option>
                            </Form.Control>
                            {errors.tipocarro && <small>{errors.tipocarro.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="placa">
                            <Form.Label>Placa:</Form.Label>
                            <Form.Control isInvalid={errors.placa} type="text" {...register("placa", carrosValidator.placa)} />
                            {errors.placa && <small>{errors.placa.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="ano">
                            <Form.Label>Ano:</Form.Label>
                            <Form.Control isInvalid={errors.ano} type="text" {...register("ano", carrosValidator.ano)} />
                            {errors.ano && <small>{errors.ano.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cor">
                            <Form.Label>Cor:</Form.Label>
                            <Form.Control isInvalid={errors.cor} type="text" {...register("cor", carrosValidator.cor)} />
                            {errors.cor && <small>{errors.cor.message}</small>}
                        </Form.Group>
                    </Row>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/carros'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>

            </Container >
        </Pagina >
    )
}

export default form
