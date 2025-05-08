import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Contacte-Nos"} />
      {/*<< Contact Section Start >>*/}
      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title mb-2">
                    <span className="wow fadeInUp">Estamos Por Perto</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Fale Conosco
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  Nossa equipe oferece suporte técnico e soluções personalizadas para
                   garantir acesso contínuo a água potável. Entre em contato conosco 
                   para saber mais sobre nossos serviços e como podemos ajuda-lo.
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Endereço</h5>
                          <p>
                           Bairro Malí, Marracuene, <br />
                           Moçambique
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="far fa-mobile" />
                        </div>
                        <div className="content">
                          <h5>Celular</h5>
                          <a href="tel:+09354587874">+258-86-123-4567</a> <br />
                          <a href="tel:+01368567894">+258-86-123-4567</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href="mailto:info@example.com" className="link">
                          geral@aguademali.co.mz
                          </a>{" "}
                          <br />
                          <a href="mailto:info@example.com" className="link">
                          info@aguademali.co.mz
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fa fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Redes Sociais</h5>
                          <div className="social-icon d-flex align-items-center">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                            <a href="#">
                              <i className="fab fa-whatsapp" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact-image wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="assets/img/contact3.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Preencha o Formulário
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    Seu endereço de e-mail não será publicado. Os 
                    campos obrigatórios estão marcados com *.
                    </p>
                  </div>
                  <form action="contact.php" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Seu Nome*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Seu Email*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Escreva A Tua Mensagem Aqui*"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span>
                            <i className="fal fa-paper-plane" />
                            Enviar
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Map Section Start >>*/}
      <div className="map-section">
        <div className="google-map wow fadeInUp" data-wow-delay=".7s">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44729.14087041663!2d32.296078951838204!3d-26.05628318967867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee67ce7c4a2d935%3A0x4633f05dbf61158e!2sBoane!5e1!3m2!1sen!2smz!4v1746738281381!5m2!1sen!2smz"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
