import Pagina from '@/components/Pagina'
import Rodape from '@/components/Rodape'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

const index = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/clientes').then(resultado => {
            setClientes(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/clientes/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina title="Clientes">
                <Container>
                    <Link href={'/clientes/cadastrar'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1" />Novo</Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Data de nascimento</th>
                                <th>Telefone</th>
                                <th>Cep</th>
                                <th>Logradouro</th>
                                <th>Complemento</th>
                                <th>Número</th>
                                <th>Bairro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link href={'/clientes/' + item.id} ><HiPencil className='text-primary' size={25} /></Link>
                                        <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger ms-2' size={25} />
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.datanasc}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.cep}</td>
                                    <td>{item.logradouro}</td>
                                    <td>{item.complemento}</td>
                                    <td>{item.numero}</td>
                                    <td>{item.bairro}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Pagina>

        </>
    )
}

export default index