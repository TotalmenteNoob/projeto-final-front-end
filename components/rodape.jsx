import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram, BsGithub, BsFillEnvelopeFill } from 'react-icons/Bs';
import { AiFillHome, AiFillPhone } from 'react-icons/Ai';

export default function App() {
  return (
    
    <footer className="bg-white text-center text-lg-start text-muted">
      <Container>
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block">
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <BsFacebook size={30}/>
          </a>
          <a href="" className="me-4 text-reset">
            <BsTwitter size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <BsInstagram size={ 30}/>
          </a>
          <a href="" className="me-4 text-reset">
            <BsGithub size={30}/>
          </a>
        </div>
      </section>
      </Container>
      <section className="border-bottom"/>
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                RotaLivre
              </h6>
              <p>
              Explore novos destinos com liberdade ao alugar um veículo na RotaLivre. Oferecemos uma experiência de locação de qualidade e conveniência. Descubra a liberdade de viajar com a RotaLivre.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Laravel
                </a>
              </p>
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <BsFillEnvelopeFill size={20} className="me-2"/>
                contatorotalivre@rotalivre.com
              </p>
              <p>
                <AiFillPhone size={20} className="me-2" /> 0800 4557 4895
              </p>
            </Col>
          </Row>
        </Container>
      </section>


      <div className="text-center p-4 bg-body-tertiary" >
        © {new Date().getFullYear()} RotaLivre. Todos os direitos reservados.
        <span>&nbsp;</span>
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
