"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const NetBandAccordion = ({
  items = [
    {
      id: 1,
      title: "Como posso solicitar os serviços da Águas de Mali?",
      content:
        "Entre em contato pelo nosso site, telefone ou e-mail. Nossa equipe responderá rapidamente.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "A água fornecida é testada regularmente?",
      content:
        "Sim, realizamos testes frequentes para garantir a qualidade e segurança da água distribuída.",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "Atendem áreas rurais e remotas?",
      content:
        "Sim, oferecemos soluções personalizadas para comunidades rurais e de difícil acesso.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "Há suporte técnico disponível em caso de problemas?",
      content:
        "Sim, nosso suporte técnico está disponível para atender com agilidade e eficiência sempre que necessário.",
      animationDelay: ".9s",
    },
  ],
  eventKey = "home1",
  activeKey,
}) => {
  const defaultActiveKey = activeKey ? activeKey : eventKey + items[0].id;
  const [active, setActive] = useState(defaultActiveKey);
  return (
    <Accordion defaultActiveKey={defaultActiveKey}>
      {items.map((item) => (
        <div
          className="accordion-item wow fadeInUp"
          data-wow-delay={item.animationDelay}
          key={item.id}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              eventKey={eventKey + item.id}
              className={`accordion-button ${
                active == eventKey + item.id ? "" : "collapsed"
              }`}
              onClick={() => setActive(eventKey + item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse
            className="accordion-collapse"
            eventKey={eventKey + item.id}
          >
            <div className="accordion-body">{item.content}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default NetBandAccordion;
