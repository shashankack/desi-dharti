import React, { useEffect, useRef } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import adBanner from "../../assets/ad-banner-1.jpg";

import thumbnail1 from "../../assets/blog-thumbnail-1.jpg";
import thumbnail2 from "../../assets/blog-thumbnail-2.jpg";
import thumbnail3 from "../../assets/blog-thumbnail-3.jpg";
import thumbnail4 from "../../assets/blog-thumbnail-4.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const blogContainerRef = useRef(null); // Reference for the blog container

  const blogContent = [
    {
      id: 1,
      title: "Ghee: Dairy Without the Discomfort",
      description:
        "Lactose intolerance doesn't mean you have to give up on dairy entirely, especially when it's a time-honored superfood that is naturally free of lactose and casein. For those with lactose sensitivity, ghee offers a rich, flavorful, and nutritious alternative.",
      image: thumbnail1,
      redirect: "/blog/1",
    },
    {
      id: 2,
      title: "Why A2 Cow Milk is Better",
      description:
        "A2 cow milk is easier to digest and is packed with nutrients. Discover why it's becoming a popular choice for health enthusiasts.",
      image: thumbnail2,
      redirect: "/blog/2",
    },
    {
      id: 3,
      title: "The Story of Our Farm",
      description:
        "From humble beginnings to a sustainable future, read about the journey of our organic farm and its impact on the community.",
      image: thumbnail3,
      redirect: "/blog/3",
    },
    {
      id: 4,
      title: "Organic Farming for Health",
      description:
        "Learn how organic farming benefits health and the environment, making it a sustainable choice for the future.",
      image: thumbnail4,
      redirect: "/blog/4",
    },
  ];

  const handleCardClick = (redirect) => {
    navigate(redirect);
  };

  useEffect(() => {
    // Animate Main Story
    const cards = blogContainerRef.current.querySelectorAll(".blog-card");
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-container" ref={blogContainerRef}>
        {blogContent.map((blog) => (
          <div
            key={blog.id}
            className="blog-card"
            onClick={() => handleCardClick(blog.redirect)}
          >
            <div className="blog-card-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-card-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button onClick={() => handleCardClick(blog.redirect)}>
                Read More...
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="ad-banner-wrapper">
        <img src={adBanner} alt="" className="ad-banner" />
      </div>
      <button className="ad-button">Explore</button>
    </section>
  );
};

export default Blog;
