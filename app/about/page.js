import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import ManageItSection from "@/components/ManageItSection";
import ProgressBar from "@/components/ProgressBar";
import BrandSlider from "@/components/slider/BrandSlider";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider2 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import NetBandAccordion from "@/components/NetBandAccordion";
const page = () => {
  return (
    <NetBandLayout>
      {/*<< Cta Video Section Start >>*/}
      <section className="cta-video-section mt-5">
        <div className="container">
          <div
            className="cta-video-wrapper bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/cta-video.jpg")',
            }}
          >
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Mais de 20 Anos Garrantindo <br/> Água Potável 
            </h2>
            <div className="video-box wow fadeInUp" data-wow-delay=".5s">
              <a
                href="https://www.youtube.com/watch?v=ZPEDIqYJyM4"
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding section-bg-3">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Nossa Equipe</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Conheça Os Departamentos
             <br />
             Da Empresa
            </h2>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Técnico</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Finanças</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Recursos Humanos</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Projectos</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Logística</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/06.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Comercial</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-team-items style-2">
                <div className="team-image">
                  <img src="assets/img/team/07.jpg" alt="team-img" />
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="about">Logística</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
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
                            Resposta Às Perguntas Mais Frequentes
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
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-2 fix section-bg-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Testemunhos Dos Clientes</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Veja O Que As Pessoas Acham
               Dos Nossos Serviços
            </h2>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <TestimonialSlider2 />
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
