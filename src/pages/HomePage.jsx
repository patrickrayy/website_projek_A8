import React, { useEffect } from 'react';
// import Swiper from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      loop: true,
      direction: 'horizontal',
      autoplay: {
        delay: 4000,
      },
      speed: 400,
      spaceBetween: 100,
      modules: [Autoplay, EffectCreative],
    });
  }, []);

  return (
    <>
      <main>
        <div className="slider-container swiper">
          <SwiperComponent
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            className="slide-content"
          >
            <SwiperSlide className="overlay">
              <img src="/images/showcase-1.png" alt="" />
              <div className="img-overlay">
                <p>Travel with TripBaliIn</p>
                <h2><span>Discover</span> Bali</h2>
                <h2>With Our Guide</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className="overlay">
              <img src="/images/showcase-2.png" alt="" />
              <div className="img-overlay">
                <p>Travel with TripBaliIn</p>
                <h2><span>Discover</span> Bali</h2>
                <h2>With Our Guide</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className="overlay">
              <img src="/images/showcase-3.png" alt="" />
              <div className="img-overlay">
                <p>Travel with TripBaliIn</p>
                <h2>Make your Itinerary</h2>
                <h2>With <span>TripBaliIn</span></h2>
              </div>
            </SwiperSlide>
          </SwiperComponent>
        </div>
      </main>
    </>
  );
};

export default HomePage;
