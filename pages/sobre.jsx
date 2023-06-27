import Pagina from '@/components/Pagina'
import Rodape from '@/components/Rodape'
import React from 'react'
import { Container } from 'react-bootstrap'
import YouTube from 'react-youtube'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '@/components/Cabecalho'

const videoId = '31kplxJn6nw'

const Sobre = () => {
    const playerOptions = {
        width: '800',
        height: '450',
    }
    return (
        <>

            <Pagina title="Sobre a RotaLivre" titulo="Quem somos nós" style={{
                backgroundImage: `url('/images/fundo.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className=' bg-light p-3'>
                    <Container className='fs-4 mt-5'>
                        <p>
                            A RotaLivre é uma locadora de automóveis comprometida em fornecer soluções de mobilidade eficientes e confiáveis para nossos clientes. Com uma ampla frota de veículos modernos e bem-mantidos, oferecemos uma experiência de aluguel de carro sem complicações, adequada a todas as necessidades de transporte.
                        </p>
                        <p>
                            Nossa missão é tornar a locação de automóveis acessível, conveniente e segura para todos os nossos clientes. Acreditamos que a liberdade de ir a qualquer lugar é um direito fundamental, e estamos empenhados em tornar essa liberdade uma realidade para todos, independentemente de suas circunstâncias.
                        </p>
                        <p>
                            Nossa equipe é composta por profissionais experientes e dedicados, prontos para atender às necessidades individuais de cada cliente. Estamos aqui para oferecer orientação, assistência e suporte durante todo o processo de locação, garantindo que sua experiência conosco seja excepcional em todos os aspectos.
                        </p>
                        <p>
                            Além disso, nos esforçamos para promover práticas sustentáveis em nossas operações, adotando medidas para minimizar nosso impacto no meio ambiente. Investimos em veículos eficientes em termos de combustível e incentivamos o uso responsável dos recursos naturais.
                        </p>
                        <p>
                            Seja para viagens de negócios, passeios familiares ou aventuras individuais, a RotaLivre está pronta para ser sua parceira de mobilidade confiável. Estamos aqui para ajudá-lo a explorar novos destinos, criar memórias duradouras e aproveitar a liberdade de viajar com conforto e segurança.
                        </p>
                    </Container>
                </div>
                <YouTube videoId={videoId} className='d-flex justify-content-center my-3' containerClassName="video-container" opts={playerOptions}/>
            </Pagina>
            <Rodape />
        </>
    )
}

export default Sobre
