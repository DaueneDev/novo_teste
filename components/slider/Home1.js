"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home1 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      netBandUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);

  return (
    <section className="hero-section hero-1">
      <Swiper
        ref={swiperRef}
        {...sliderProps.home1}
        className="swiper hero-slider"
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="0.8s"
                    data-duration=".1s"
                  >
                    A Melhor Solução
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.0s"
                    data-duration=".1s"
                  >
                    Garantimos Água Potável  <br /> Na Tua Casa 24H/Dia
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.2s"
                    data-duration=".1s"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                  Somos Água De Malí
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                      data-duration=".1s"
                    >
                      <span>
                        {" "}
                        Descubra Mais 
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.2s"
                      data-duration=".1s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=cNrTGJiDPY8"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Veja O Vídeo</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="0.8s"
                    data-duration=".1s"
                  >
                    Atendimento Excepcional
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.0s"
                    data-duration=".1s"
                  >
                    Sempre Atentos Às Necessidades Do Cliente 
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.2s"
                    data-duration=".1s"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    Somos Água De Malí
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                      data-duration=".1s"
                    >
                      <span>
                        {" "}
                        Descubra Mais 
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.2s"
                      data-duration=".1s"
                    >
                      <a
                        href="https://https://www.youtube.com/watch?v=cNrTGJiDPY8"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Veja O Vídeo</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="0.8s"
                    data-duration=".1s"
                  >
                    Ajudamos-te A Crescer
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.0s"
                    data-duration=".1s"
                  >
                   Contribuimos Para O Crescimento Das Comunidades 
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.2s"
                    data-duration=".1s"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    Somos Água De Malí
                  </p>
                  <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                      data-duration=".1s"
                    >
                      <span>
                        {" "}
                        Descubra Mais 
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.2s"
                      data-duration=".1s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=cNrTGJiDPY8"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Veja O Vídeo</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home1;
