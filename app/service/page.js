import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider3 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "How to learn digital marketing?",
      content:
        " Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "Can I use the demos made by Ewebot?",
      content:
        " Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "Why didn’t you showcase my submission?",
      content:
        " Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "Why didn’t you showcase my submission?",
      content:
        " Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      animationDelay: ".9s",
    },
  ];
  return (
    <NetBandLayout>
      {/*<< Feature Video Section Start >>*/}
      <section
        className="feature-video-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/video_bg-Copy.jpg")' }}
      >
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Fornecemos Água Limpa E Com Pressão
                    </h2>
                  </div>
                  <p className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                    crstd naidm kaosud gtdtdy bjddhud bdgydet ,ougnf kksps
                    crstd naidm kaosud gtdtdy bjddhud bdgydet ,ougnf kksps
                    crstd naidm kaosud gtdtdy bjddhud bdgydet ,ougnf kksps
                    crstd naidm kaosud gtdtdy bjddhud bdgydet ,ougnf kksps
                  </p>
                  <Link
                    href="pricing"
                    className="theme-btn wow fadeInUp mt-4"
                    data-wow-delay=".3s"
                  >
                    <span>
                      Marcar Vistoria <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Banner Section Start >>*/}
      <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/01.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">

              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Precisa De Água Canalizada  <br />
              Para A Sua Casa?
              </h2>
            </div>
            <Link
              href="contact"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Contante-nos
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area-2">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="fa fa-wrench fa-xs" />
                  </div>
                  <div className="content">
                    <h3>Assistência Técnica Imediata</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content">
                    <h3>Linha Do Cliente Disponível</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="fa fa-tint fa-xs" />
                  </div>
                  <div className="content">
                    <h3>Água Limpa Para O Consumo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section-2 fix mt-5">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">Sucursais</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Conheça as Nossas Sucursais
              </h2>
            </div>
          </div>
          <NewsSlider />
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
