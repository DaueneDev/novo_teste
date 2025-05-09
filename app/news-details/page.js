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
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0">
                      5 Dicas Para Economizar Água
                      </h2>
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          Manecas Timoteo
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          09 de Maio de 2025
                        </span>
                      </div>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                          Nullam in mi eget urna fermentum malesuada.
                          Ut nec enim quis sapien vehicula blandit. In
                           porta vestibulum arcu, non aliquam lacus
                           gravida vitae.
                      </p>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                      <img
                        src="assets/img/news/post-3.jpg"
                        alt="blog__img"
                        className="single-post-image"
                      />
                      <h2>
                      Pequenas Ações Que Fazem Uma Grande
                       Diferença No Seu Dia a Dia
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                      <blockquote>
                        Diam luctus nostra dapibus varius et semper semper
                        rutrum ad risus felis eros. Cursus libero viverra tempus
                        netus diam vestibulum
                      </blockquote>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                      <ul className="checked-list mb-4">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                      <h4>Como Reduzir o Consumo Sem Abrir Mão do Conforto</h4>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                      <img
                        className="alignleft"
                        src="assets/img/news/post-5.jpg"
                        alt="blog__img"
                      />
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum,
                        nibh purus faucibus lorem, vitae egestas mauris 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                      </p>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur in semper risus.
                       Integer efficitur, arcu id placerat fermentum, 
                        lacus sed lacus. Sed vel risus non nunc ultricies
                         fermentum. Pellentesque habitant morbi tristique 
                         senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>...</h4>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Partilhe o Artigo</h4>
                      <div className="social-share">
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
              <BlogSideBar />
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
