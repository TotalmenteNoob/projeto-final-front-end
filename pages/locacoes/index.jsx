import Pagina from '@/components/Pagina'
import Rodape from '@/components/Rodape'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

const index = () => {

    const [locacoes, setLocacoes] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/locacoes').then(resultado => {
            setLocacoes(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/locacoes/' + id)
            getAll()
        }
    }


    return (
        <>
            <Pagina title="Locações">
                <Container>
                    <Link href={'/locacoes/cadastrar'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1" />Novo</Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Custo</th>
                                <th>Início da locação</th>
                                <th>Fim da locação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locacoes.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link href={'/locacoes/' + item.id} ><HiPencil className='text-primary' size={25} /></Link>
                                        <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger ms-2' size={25} />
                                    </td>
                                    <td>{item.custo}</td>
                                    <td>{item.inicioLocacao}</td>
                                    <td>{item.fimLocacao}</td>
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