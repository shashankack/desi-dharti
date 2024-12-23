import React from "react";
import "./About.css";
import vectorImg from "../../assets/bg-vector.png";
import cow1 from "../../assets/cow-new-1.png";
import cow2 from "../../assets/cow-new-2.png";
import cow3 from "../../assets/cow-new-3.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <img src={vectorImg} alt="" className="bg-vector" />
      <h1 className="about-title">About Us</h1>
      <div className="about-image-container">
        <img src={cow1} alt="Cow 1" className="about-image" />
        <img src={cow2} alt="Cow 2" className="about-image" />
        <img src={cow3} alt="Cow 3" className="about-image" />
      </div>
      <div className="about-text-container">
        Welcome to Desi Dharthi, where tradition meets purity. We bring you
        natural ghee, milk, and buttermilk, crafted with care and rooted in
        ancestral practices. Our products reflect a commitment to wellness,
        sustainability, and ethical farming. Lovingly nurtured cows ensure
        nutrient-rich, natural goodness in every drop. Experience the richness
        of tradition delivered straight from the heart of the earth.
      </div>
    </section>
  );
};

export default About;
