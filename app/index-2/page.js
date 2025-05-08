import NetBandAccordion from "@/components/NetBandAccordion";
import Package1 from "@/components/Package";
import ProgressBar from "@/components/ProgressBar";
import { BrandSlider2 } from "@/components/slider/BrandSlider";
import Home2 from "@/components/slider/Home2";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider2 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "How do you find different criteria in your process?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".9s",
    },
  ];
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
              Mais de 20 Anos Fornecendo <br/> Água Potável 
            </h2>
            <div className="video-box wow fadeInUp" data-wow-delay=".5s">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
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
            <span className="wow fadeInUp">our hounrable team</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              We’ve Exclusive Team member <br />
              Meet our Professionals
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
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="team-detaills">Leslie Braxton</Link>
                  </h5>
                  <p>Team Leader</p>
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
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="team-detaills">Sutton Tanner</Link>
                  </h5>
                  <p>GRAPHIC DESIGNER</p>
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
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="team-detaills">Jack Bale</Link>
                  </h5>
                  <p>Co founder</p>
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
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h5>
                    <Link href="team-detaills">Alex Carry</Link>
                  </h5>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="team-button wow fadeInUp" data-wow-delay=".4s">
            <Link href="team" className="theme-btn mt-5 hover-white">
              <span>
                Explore more team
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
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
