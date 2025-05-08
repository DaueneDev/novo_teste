import NiceSelect from "./NiceSelect";

const ContactBox = () => {
  return (
    <div className="contact-box">
      <div className="contact-title">
        <h3 className="wow fadeInUp" data-wow-delay=".3s">
          Precisa de Nossos Serviços?
        </h3>
        <p className="wow fadeInUp" data-wow-delay=".5s">
          Estamos aqui para ajudar. Preencha o formulário abaixo
           e entraremos em contato o mais rápido possível.
        </p>
      </div>
      <div className="contact-form-items">
        <form action="#" id="contact-form" method="POST">
          <div className="row g-3">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="form-clt">
                <input type="text" name="name" id="name" placeholder="Nome" />
                <div className="icon">
                  <i className="far fa-user" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="form-clt">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="form-clt">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Escreva A Tua Mensagem Aqui"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
              <button type="submit" className="theme-btn">
                <span>
                Enviar
                  <i className="fas fa-chevron-right" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactBox;
