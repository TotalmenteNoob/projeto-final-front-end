import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import Rodape from '@/components/Rodape';
import ControlledCarousel from '@/components/ControlledCarousel';
import { Container } from 'react-bootstrap';
import Cards from '@/components/Cards';
import Cards2 from '@/components/Cards2';

const index = () => {
  return (
    <>
      <Pagina title = "RotaLivre"/>


      <ControlledCarousel>

      </ControlledCarousel>
      <Container>
        <p className='fs-3 text-center mb-5'>
        A RotaLivre é uma locadora de automóveis que oferece praticidade e qualidade aos seus clientes. Com uma ampla variedade de veículos modernos e bem cuidados, garantimos uma experiência de locação satisfatória. Nossa equipe dedicada está pronta para auxiliá-lo desde a reserva até a devolução do veículo. Valorizamos o atendimento personalizado e buscamos superar suas expectativas. Escolha a RotaLivre e desfrute de uma locação descomplicada e conveniente.
        </p>
      </Container>
      <div className='bg-light p-4'>
        <h3 className='text-center'>Razões para alugar conosco</h3>
        <p className='text-center fs-4'>Confira os nossos diferenciais:</p>
        <Cards/>
      </div>
      <Cards2/>

      <Rodape>

      </Rodape>
    </>
  )
}

export default index