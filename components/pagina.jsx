import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './cabecalho'


const Pagina = (props) => {
    return (
        <>
            <title>{props.title}</title>
            <Cabecalho />
            <div className='bg-success py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            {props.children} {/*a props.children serve para colocar o conteudo onde quiser na página*/}
             

        </>
    )
}

export default Pagina