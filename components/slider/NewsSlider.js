"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const NewsSlider = () => {
  return (
    <Slider
      {...sliderProps.newsCarouselActive}
      className="news-carousel-active"
    >
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
        />
        <div className="news-content">
          <h5>
            <Link href="news-details">
              Sucursal De Boane
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>Ver Página</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/04.jpg")' }}
        />
        <div className="news-content">
          <h5>
            <Link href="news-details">
            Sucursal De Kumbeza
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>Ver Página</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/05.jpg")' }}
        />
        <div className="news-content">
          <h5>
            <Link href="news-details">
            Sucursal De Mavoko
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>Ver Página</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
        />
        <div className="news-content">
          <h5>
            <Link href="news-details">
            Sucursal De Marracuene
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>Ver Página</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </Slider>
  );
};
export default NewsSlider;
