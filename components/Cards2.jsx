import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { AiFillCar } from 'react-icons/ai';

const Cards2 = () => {
  const [isHovered, setIsHovered] = useState(false);

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
            <Button
              style={{
                backgroundColor: isHovered ? '#3CB371' : '#228B22',
                border: 'none',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              QUERO CONHECER <AiFillCar size={20} />
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Cards2;
