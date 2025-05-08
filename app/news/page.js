import BlogSideBar from "@/components/BlogSideBar";
import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <section className="blog-wrapper news-wrapper section-padding border-bottom">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-1.jpg")',
                      }}
                    >
                      <div className="post-date" style={{ marginLeft : "490px" }}>
                        <h4>
                          Economia
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          09 de Maio 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                        5 Dicas Para Economizar Água
                        </Link>
                      </h2>
                      <p>
                      Aprenda Maneiras Simples E Eficazes
                      De Reduzir O Consumo De Água No Dia A Dia. 
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          LEIA MAIS <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-2.jpg")',
                      }}
                    >
                      <div className="post-date" style={{ marginLeft : "490px" }}>
                        <h4>
                        Meio Ambiente
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          09 de Maio 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                        Como Receber Descontos Na Factura De Água Todos Meses
                        </Link>
                      </h2>
                      <p>
                      onfira Estratégias Práticas Para Reduzir 
                      O Valor Da Sua Fatura De Água Todos Os Meses
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          LEIA MAIS <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-3.jpg")',
                      }}
                    >
                      <div className="post-date" style={{ marginLeft : "490px" }}>
                        <h4>
                        Actividades
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          09 de Maio 2025
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                        Como Funciona O Sistema De Água Canalizada
                        </Link>
                      </h2>
                      <p>
                      Entenda Todo O Processo, Desde A Captação Da
                       Água Até Ela Chegar Tratada À Torneira Da Sua Casa.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          LEIA MAIS <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post quote-post format-quote">
                  </div>
                </div>
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        03
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        04
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        ...
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <BlogSideBar />
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
