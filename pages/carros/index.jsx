import Pagina from '@/components/Pagina'
import Rodape from '@/components/Rodape'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Table } from 'react-bootstrap'
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios'

const index = () => {

    const [carros, setCarros] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/carros').then(resultado => {
            setCarros(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/carros/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina title="Carros">
                <Container>
                    <Link href={'/carros/cadastrar'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1" />Novo</Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Quilometragem</th>
                                <th>Placa</th>
                                <th>Ano</th>
                                <th>Tipo de carro</th>
                                <th>Cor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carros.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link href={'/carros/' + item.id} ><HiPencil className='text-primary' size={25} /></Link>
                                        <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger ms-2' size={25} />
                                    </td>
                                    <td>{item.marca}</td>
                                    <td>{item.modelo}</td>
                                    <td>{item.quilometragem}</td>
                                    <td>{item.placa}</td>
                                    <td>{item.ano}</td>
                                    <td>{item.tipocarro}</td>
                                    <td>{item.cor}</td>
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