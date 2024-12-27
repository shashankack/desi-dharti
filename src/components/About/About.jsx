import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

import vector from "../../assets/about-vector.png";

import insta1 from "../../assets/Instagram/grid-item-1.jpg";
import insta2 from "../../assets/Instagram/grid-item-2.png";
import insta3 from "../../assets/Instagram/grid-item-3.jpg";
import insta4 from "../../assets/Instagram/grid-item-4.png";
import insta5 from "../../assets/Instagram/grid-item-5.png";
import insta6 from "../../assets/Instagram/grid-item-6.png";
import insta7 from "../../assets/Instagram/grid-item-7.jpg";
import insta8 from "../../assets/Instagram/grid-item-8.jpg";
import insta9 from "../../assets/Instagram/grid-item-9.png";

const About = () => {
  const instaGrid = [
    {
      id: 1,
      img: insta1,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCYjvTAymAU/",
    },
    {
      id: 2,
      img: insta2,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCYjlFeSLbt/",
    },
    {
      id: 3,
      img: insta3,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCYjWhcyAUL/",
    },
    {
      id: 4,
      img: insta4,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCYjEGryh5I/",
    },
    {
      id: 5,
      img: insta5,
      redirectUrl: "https://www.instagram.com/desidharti/reel/DCYYruZStjI/",
    },
    {
      id: 6,
      img: insta6,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCG2U3YyDR1/",
    },
    {
      id: 7,
      img: insta7,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCGtZJ8S6Gg/",
    },
    {
      id: 8,
      img: insta8,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCGhPpPy9yc/",
    },
    {
      id: 9,
      img: insta9,
      redirectUrl: "https://www.instagram.com/desidharti/p/DCGcW3BSeBd/",
    },
  ];

  return (
    <section className="about-section" id="about-us">
      <h1 className="about-title">Welome To Desi Dharti</h1>
      <div className="about-text">
        <p>
          The name Desi Dharthi reflects our deep connection to Indian soil and
          our commitment to preserving its natural richness. We offer
          premium-quality A2 cow milk, ghee, and buttermilk, celebrating the
          timeless wisdom of Indian agriculture and the nutritional value of
          native cow breeds. We deliver directly from our ethical farms to your
          home, ensuring no middlemen, no chemicals, and no cruelty. Every
          product is crafted with care, preserving its purity and desi goodness.
          By choosing Desi Dharthi, you embrace a healthier lifestyle while
          supporting tradition, sustainability, and the well-being of animals,
          farmers, and the environment.
        </p>
      </div>

      <div className="insta-grid-container">
        <Link className="button" target="_blank" to="https://www.instagram.com/desidharti/">@desi_dharti</Link>
        <div className="insta-grid">
          {instaGrid.map((gridItem) => (
            <div key={gridItem.id} className="insta-card">
              <a
                href={gridItem.redirectUrl}
                target="_blank"
                className="grid-item"
              >
                <img src={gridItem.img} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <img src={vector} className="about-vector"/>
    </section>
  );
};

export default About;
