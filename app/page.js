import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import MovieSlider from "@/components/slider/MovieSlider";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout header={2}>
      {/*<< Hero Section Inicio >>*/}
      <Home1 />
      {/*<< Feature Section Inicio >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items ">
                <div className="content">
                  <span>Vantagem 01</span>
                  <h3>Vários Clientes Satisfeitos</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-users fa-xs " />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items ">
                <div className="content">
                  <span>Vantagem 02</span>
                  <h3>Água Limpa Para O Consumo </h3>
                </div>
                <div className="icon">
                  <i className="fa fa-tint fa-xs "/>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items ">
                <div className="content">
                  <span>Vantagem 03</span>
                  <h3>Assistência Técnica Imediata</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-wrench fa-xs " />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items ">
                <div className="content">
                  <span>Vantagem 04</span>
                  <h3>Linha Do Cliente Disponível</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-support " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Sobre Nos Section >>*/}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <img
                      src="assets/img/about/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="award-img">
                      <img src="assets/img/about/award.png" alt="img" />
                    </div>
                  </div>
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="assets/img/about/about-2.jpg" alt="about-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Sobre Água De Malí</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Estamos Comprometidos Com O Abastecimento De Água
                       Limpa
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Estamos firmemente dedicados a garantir o acesso 
                    à água potável em todas as comunidades, por meio da
                     implementação de tecnologias de ponta, parcerias locais
                      estratégicas e processos de purificação ambientalmente 
                      responsáveis. Para atingir tal objectivo, contamos com:
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Uma Equipe De Profissionais Dedicados
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Uso De Materiais Resistentes
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Controle De Qualidade Rigoroso
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Link href="about" className="theme-btn">
                        <span>
                          Saiba Mais
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Efeito Continuo do Slogan >>*/}
      <div className="marque-section section-padding pt-0 mt-5">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Água De</span>
                <span className="text-slider">Malí</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Abastecimento De</span>
                <span className="text-slider">Água</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Água De</span>
                <span className="text-slider">Malí</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Abastecimento De</span>
                <span className="text-slider">Água</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Água De</span>
                <span className="text-slider">Malí</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Abastecimento De</span>
                <span className="text-slider">Água</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Água De</span>
                <span className="text-slider">Malí</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Abastecimento De</span>
                <span className="text-slider">Água</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Água De</span>
                <span className="text-slider">Malí</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Abastecimento De</span>
                <span className="text-slider">Água</span>
                <span className="text-slider style-border" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< Membros da Equipe >>*/}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Nossa Equipe</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Conheça Os Departamentos  <br />
              Da Empresa
            </h2>
          </div>
          <div className="team-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/01.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento De</p>
                    <h4>
                      <Link href="team-detaills">Recursos Humanos</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/02.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento</p>
                    <h4>
                      <Link href="team-detaills">Jurídico</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/03.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento</p>
                    <h4>
                      <Link href="team-detaills">Comercial</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/04.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento</p>
                    <h4>
                      <Link href="team-detaills">Técnico</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
              </div>
            </div>
            <div className="team-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/01.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento De</p>
                    <h4>
                      <Link href="team-detaills">Logística</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/02.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Departamento</p>
                    <h4>
                      <Link href="team-detaills">Financeiro</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/03.jpg" alt="team-img" />
                  </div>
                  <div className="team-content text-center">
                  <p>Depertamento De</p>
                    <h4>
                      <Link href="team-detaills">Projectos</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Seccao Com Efeito Paralax >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Precisa De Água Potável Canalizada Em Sua Casa?
            </h2>
            <div className="button-items">
              <Link
                href="contact"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  Ligue Para Nós <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">ou</span>
              <a
                href="contact"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span>
                  Envie Mensagem <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Efeito Do Contador >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <span className="count">+</span>20
              </h2>
              <p>
              ANOS DE  <br />
              OPERAÇÃO
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <span className="count">+15</span>mil
              </h2>
              <p>
                CLIENTES <br />
                ACTIVOS
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
              <h2>
                <span className="count">+33</span>
              </h2>
              <p>
                KILÓMETROS QUADRAROS <br />
                ABRANGIDOS
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <span className="count">4</span>
              </h2>
              <p>
                SUCURSAIS <br />
                ACTIVAS
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Testemunhos Dos Clientes</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Veja O Que As Pessoas Acham <br />
              Dos Nossos Serviços
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="faq-image">
          <img src="assets/img/faq.png" alt="img" />
        </div>
        <div className="faq-shape">
          <img src="assets/img/faq-shape-1.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Pergutas Frequentes
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Vamos Responder Às Perguntas Mais Frequentes
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <NetBandAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Artigos e Noticias */}
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Artigos &amp; Notícias
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details+">
                      5 Dicas Para Economizar Água 
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Economia
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      21 Abril, 2025
                    </li>
                  </ul>
                  <p>
                  Aprenda Maneiras Simples E Eficazes De Reduzir
                   O Consumo De Água No Dia A Dia.
                  </p>
                  <Link href="news-details+" className="link-btn style-2">
                    Leia Mais <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details+">
                      Como Receber Descontos Na Factura De Água Todos Meses
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Meio Ambiente
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      21 Abril, 2025
                    </li>
                  </ul>
                  <p>
                  Confira Estratégias Práticas Para Reduzir 
                  O Valor Da Sua Fatura De Água Todos Os Meses
                  </p>
                  <Link href="news-details+" className="link-btn style-2">
                    Leia Mais <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details+">
                      Como Funciona O Sistema De Água Canalizada
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Actividades
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      21 Abril, 2025
                    </li>
                  </ul>
                  <p>
                  Entenda Todo O Processo, Desde A Captação Da Água
                  Até Ela Chegar Tratada À Torneira Da Sua Casa.
                  </p>
                  <Link href="news-details+" className="link-btn style-2">
                    Leia Mais <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
