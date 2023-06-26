import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/Ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import locadorasValidator from '@/validator/locadorasValidator';
import { mask } from 'remask';

const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors },
    } = useForm();

    function salvar(dados) {
        const locadoras = JSON.parse(window.localStorage.getItem("locadoras")) || [];
        locadoras.push(dados);
        window.localStorage.setItem("locadoras", JSON.stringify(locadoras));
        push("/locadoras/");
    }

    function gerarMascara(campo) {
        const mascaras = {
            cpf: "999.999.999-99",
            telefone: "(99) 9999-9999",
            cep: "99999-999",
            // Adicione outras máscaras aqui, se necessário
        };

        return mascaras[campo] || "";
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const mascara = gerarMascara(name);

        setValue(name, mask(value, mascara));
    }


    return (
        <Pagina title='Cadastrar locadoras'>
            <Container>

                <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control isInvalid={errors.email} type="text" {...register("email", locadorasValidator.email)} />
                            {errors.email && <small>{errors.email.message}</small>}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="telefone">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", locadorasValidator.telefone)} onChange={handleChange} />
                            {errors.telefone && <small>{errors.telefone.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="cep">
                            <Form.Label>Cep:</Form.Label>
                            <Form.Control isInvalid={errors.cep} type="text" {...register("cep", locadorasValidator.cep)} onChange={handleChange} />
                            {errors.cep && <small>{errors.cep.message}</small>}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="estado">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Control as="select" isInvalid={errors.estado} {...register("estado", locadorasValidator.estado)}>
                                <option selected disabled>Selecione o estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Control>
                            {errors.estado && <small>{errors.estado.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="logradouro">
                            <Form.Label>Logradouro:</Form.Label>
                            <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", locadorasValidator.logradouro)} />
                            {errors.logradouro && <small>{errors.logradouro.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="complemento">
                            <Form.Label>Complemento:</Form.Label>
                            <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", locadorasValidator.complemento)} />
                            {errors.complemento && <small>{errors.complemento.message}</small>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="numero">
                            <Form.Label>Número:</Form.Label>
                            <Form.Control isInvalid={errors.numero} type="text" {...register("numero", locadorasValidator.numero)} />
                            {errors.numero && <small>{errors.numero.message}</small>}
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="bairro">
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", locadorasValidator.bairro)} />
                            {errors.bairro && <small>{errors.bairro.message}</small>}
                        </Form.Group>
                    </Row>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/locadoras'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>

            </Container >
        </Pagina >
    )
}

export default form
