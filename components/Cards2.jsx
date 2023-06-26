import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { AiFillCar } from 'react-icons/Ai';

const cards2 = () => {
    return (
        <>
            <Container className='p-5'>
                <Card className="text-center">
                    <Card.Header>
                        <Card.Title>QUER EXPLORAR ROTEIROS SECRETOS DE CARRO?</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Destinos para descobrir e se inspirar
                        </Card.Text>
                        <Button style={{ backgroundColor: '#228B22', border: 'none' }}>QUERO CONHECER <AiFillCar size={20} /></Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default cards2