import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel activeIndex={index} onSelect={handleSelect} className='m-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Aluguel de Veículos</h2>
          <p className='fs-4'>Descubra uma frota diversificada para todas as suas necessidades de locação.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Conveniência e Qualidade</h2>
          <p className='fs-4'>Oferecemos atendimento personalizado e veículos bem cuidados para garantir uma experiência de locação satisfatória.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Liberdade para Viajar</h2>
          <p className='fs-4'>
            Descubra a liberdade de explorar novos destinos com a RotaLivre.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default ControlledCarousel;