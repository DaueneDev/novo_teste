"use client";

import { Nav, Tab } from "react-bootstrap";

const Service1 = () => {
  return (
    <section className="trusted-client-section fix section-padding pt-0 mg-top-20">
      <div className="container">
        <div className="trusted-client-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div
                className="trusted-client-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/feature/trusted.jpg")',
                }}
              >
                <div className="icon-box">
                  <img
                    src="assets/img/circle.png"
                    alt="img"
                    className="text-circle"
                  />
                  <div className="icon">
                    <img src="assets/img/icon.png" alt="icon-img" />
                  </div>
                </div>
                <div className="counter-main-area">
                  <div className="counter-area">
                    <div className="counter-items">
                      <h2>
                        <span className="count">12</span>+
                      </h2>
                      <h3>Anos De Operação</h3>
                    </div>
                    <div className="counter-items">
                      <h2>
                        <span className="count">10</span>k+
                      </h2>
                      <h3>Clientes Activos</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 mt-5 mt-xl-0">
              <div className="trusted-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Os Fundamentos Da Nossa Empresa
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Trabalhamos com propósito, guiados por valores sólidos e
                 estratégias focadas no bem coletivo.
                </p>
                <div className="single-tab-items">
                  <Tab.Container defaultActiveKey={"mission"}>
                    <Nav as={"ul"} className="nav mb-4" role="tablist">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link as={"a"} href="#mission" eventKey="mission">
                          Nossa Missão
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} href="#strategy" eventKey="strategy">
                          Nossa Estratégia
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} href="#vision" eventKey="vision">
                          Nossa Visão
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="mission" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul className="wow fadeInUp" data-wow-delay=".3s">
                            <li>
                              <i className="fas fa-check" />
                              Ser referência no fornecimento 
                               de <b/>água limpa em toda a região.
                            </li>
                          </ul>
                          <div
                            className="pro-items wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <div className="pro-head">
                              <h6 className="title">
                                Percentual de Conclusão
                              </h6>
                              <span className="point">75%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="strategy" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Investir em inovação, fortalecer parcerias
                              locais e ampliar nosso alcance com soluções sustentáveis.
                            </li>
                          </ul>
                          <div className="pro-items">
                            <div className="pro-head">
                              <h6 className="title">
                                Percentual de Conclusão
                              </h6>
                              <span className="point">65%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="vision" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              Garantir acesso contínuo à água potável 
                              com qualidade e responsabilidade ambiental.
                            </li>
                          </ul>
                          <div className="pro-items">
                            <div className="pro-head">
                              <h6 className="title">
                                Percentual de Conclusão
                              </h6>
                              <span className="point">55%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service1;
