import React, { useEffect, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import ghee from "../../assets/ghee.png";
import carouselImg1 from "../../assets/carousel-card-1.png";
import carouselImg2 from "../../assets/carousel-card-2.png";
import carouselImg3 from "../../assets/carousel-card-3.png";
import stepsVector from "../../assets/steps-of-prep.jpg";
import aboutUsCard1 from "../../assets/about-us-card-1.jpg";
import aboutUsCard2 from "../../assets/about-us-card-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRefs = useRef([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Milk",
      description: "Fresh milk from our farm",
      image: ghee,
      redirect: "/products/milk",
    },
    {
      id: 2,
      name: "Ghee",
      description: "Fresh ghee from our farm",
      image: ghee,
      redirect: "/products/ghee",
    },
    {
      id: 3,
      name: "Butter Milk",
      description: "Fresh butter milk",
      image: ghee,
      redirect: "/products/butter-milk",
    },
  ];

  return (
    <>
      {/* Section One */}
      <section
        className="home-section-one"
        id="home"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
          }}
        >
          <SwiperSlide>
            <img
              style={{ width: "100%", height: "100%" }}
              src={carouselImg1}
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%", height: "100%" }}
              src={carouselImg2}
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%", height: "100%" }}
              src={carouselImg3}
              alt="Slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Section Two */}
      <section
        className="home-section-two"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="product-cards-container">
          <h1>Our Products</h1>
          <div className="product-cards-inner-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="image-background">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card-title">
                  <h2>{product.name}</h2>
                </div>
                <p>{product.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            ))}
          </div>
          {/* <img src={vector} alt="" className="bg-vector" /> */}
        </div>
      </section>

      {/* Section Three */}
      <section
        className="home-section-three"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="cards-container">
          <div className="image-cards">
            <div className="card">
              <img src={aboutUsCard1} />
            </div>
            <div className="card">
              <img src={aboutUsCard2} />
            </div>
          </div>
          {/* <img src={stepsVector} alt="" className="steps-vector" /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
