import Breadcrumb from "@/components/Breadcrumb";
import ContactBox from "@/components/ContactBox";
import BrandSlider from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      {/* Team Details Section Start */}
      <section className="team-details-section fix section-padding">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/team/details-1.jpg")',
                  }}
                />
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-details-content">
                  <div className="star pb-3">
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                  </div>
                  <h3>Sucursal de Bobole</h3>
                  <p>
                    hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd ,soojf nsygnd sjs
                    hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd ,soojf nsygn as
                    hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd ,soojf 
                    hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd ,soojf nsygn
                    hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd
                    ,soojf nsygn as hshsgdgd ,soojf nsygn ahytdhd ,hshsgdgd
                  </p>
                  <Link href="contact" className="theme-btn mt-5">
                    <span className="mb-0">
                      Pedir Vistoria
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Skill Section Start */}
      <section className="team-skill fix section-padding">
        <div className="container">
          <div className="team-skill-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-skill-content">
                  <h3>
                    Esta Sucursal cobre um território de mais de 10 km²...
                  </h3>
                </div>
              </div>
              <div
                className="col-lg-5 mt-4 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Contact Section Start */}
      <section className="team-contact-area fix section-padding">
        <div className="container">
          <div className="team-contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="get-touch-items">
                  <div className="get-touch-title">
                    <h2 className="wow fadeInUp">Entre em contacto </h2>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mattis <br />
                      faucibus odio feugiat arc dolor.
                    </p>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Contacto</h4>
                      <h5>
                        <a href="tel:+258-841-221-234">+258-841-221-234</a>
                      </h5>
                    </div>
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>Email</h4>
                      <h5>
                        <a href="mailto:Boane@aguademali.co.mz" className="link">
                          Boane@aguademali.co.mz
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Endereço</h4>
                      <h5>Maputo, Boane</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <ContactBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-2 fix section-bg-2 mt-0">
        <div className="container">
          <div className="brand-wrapper style-2">
            <BrandSlider />
          </div>
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
