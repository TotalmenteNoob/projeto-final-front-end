import Pagina from '@/components/Pagina'
import Rodape from '@/components/Rodape'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

const index = () => {

    const [locadoras, setLocadoras] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/locadoras').then(resultado => {
            setLocadoras(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/locadoras/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina title="Locadoras">
                <Container>
                    <Link href={'/locadoras/cadastrar'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1" />Novo</Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Cep</th>
                                <th>Estado</th>
                                <th>Logradouro</th>
                                <th>Complemento</th>
                                <th>Número</th>
                                <th>Bairro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locadoras.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link href={'/locadoras/' + item.id} ><HiPencil className='text-primary' size={25} /></Link>
                                        <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger ms-2' size={25} />
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.cep}</td>
                                    <td>{item.estado}</td>
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
            <Rodape />
        </>
    )
}

export default index