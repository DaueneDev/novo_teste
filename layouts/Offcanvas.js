import Link from "next/link";
import { Fragment } from "react";
import { MobileMenu } from "./Menus";
const Offcanvas = ({ closeSidebar, sidebar, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebar ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/logomali.svg" alt="logo-img"
                    style={{ height: "100px", width: "100px", }}  />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => closeSidebar()}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="d-none d-xl-block">
                Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case
                regione signiferumque vim te. Ex mea quem munere lobortis. Duis
                aute irure dolor in reprehenderit in voluptate velit esse
                cillum.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu single={single} />
              </div>
              <div className="offcanvas__contact">
                <h4>Informação De Contacto</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                      Bairro Malí, Marracuene, Moçambique
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@netband.com">
                        <span className="mailto:info@netband.com">
                           geral@aguademali.co.mz
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Seg-Sexta: 08horas -17horas / 
                        Sabado: 08horas -13horas
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+258841234567">+258 84 1234567</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    <span>
                      Contacte-nos
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebar ? "overlay-open" : ""}`}
        onClick={() => closeSidebar()}
      />
    </Fragment>
  );
};
export default Offcanvas;
