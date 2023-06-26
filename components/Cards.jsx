import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Cards = () => {
    return (
        <>
            <Container >
                <Row>
                    <Col>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images/card3.png" />
                            <Card.Body>
                                <Card.Title>Os carros mais novos e mais modernos</Card.Title>
                                <Card.Text>
                                    O carro perfeito para você está aqui.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images/card4.png" />
                            <Card.Body>
                                <Card.Title>Novidades</Card.Title>
                                <Card.Text>
                                    Acesse nosso canal direto e fique por dentro de tudo que acontece na RotaLivre!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images/card1.png" />
                            <Card.Body>
                                <Card.Title>Somos uma empresa certificada</Card.Title>
                                <Card.Text>
                                    Somos a primeira empresa do segmento a conquistar vários premios e certificações de confiabilidade.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="images/card2.png" />
                            <Card.Body>
                                <Card.Title>Nossas lojas</Card.Title>
                                <Card.Text>
                                    Presentes em todas as capitais e nas principais cidades e aeroportos do país.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cards