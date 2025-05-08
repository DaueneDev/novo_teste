import Link from "next/link";

const BlogSideBar = () => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Pesquisar</h3>
          </div>
          <div className="search_widget">
            <form action="#">
              <input type="text" placeholder="Digite a palavra..." />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Artigos Populares</h3>
          </div>
          <div className="popular-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp1.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                  5 Dicas Para Economizar Água
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  03 de Maio de 2025
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp2.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                  Como Receber Descontos Na Factura De Água Todos Meses
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  05 de Maio de 2025
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp3.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                  Como Funciona O Sistema De Água Canalizada
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  09 de Maio de 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Categorias</h3>
          </div>
          <div className="widget_categories">
            <ul>
              <li>
                <Link href="news">
                  Actividades <span>13</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Economia <span>09</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Meio Ambiente <span>11</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Projectos <span>05</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Redes Sociais</h3>
          </div>
          <div className="social-link">
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
  );
};
export default BlogSideBar;
