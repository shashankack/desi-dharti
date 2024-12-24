import React, { useEffect, useRef } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Blog = () => {
  const navigate = useNavigate();
  const blogContainerRef = useRef(null); // Reference for the blog container

  const blogContent = [
    {
      id: 1,
      title: "Ghee: Dairy Without the Discomfort",
      content:
        "Lactose intolerance doesn't mean you have to give up on dairy entirely, especially when it's a time-honored superfood that is naturally free of lactose and casein. For those with lactose sensitivity, ghee offers a rich, flavorful, and nutritious alternative.",
      image: "https://placehold.co/600x400",
      redirect: "/blog/1",
    },
    {
      id: 2,
      title: "Why A2 Cow Milk is Better",
      content:
        "A2 cow milk is easier to digest and is packed with nutrients. Discover why it's becoming a popular choice for health enthusiasts.",
      image: "https://placehold.co/200x200",
      redirect: "/blog/2",
    },
    {
      id: 3,
      title: "The Story of Our Farm",
      content:
        "From humble beginnings to a sustainable future, read about the journey of our organic farm and its impact on the community.",
      image: "https://placehold.co/200x200",
      redirect: "/blog/3",
    },
    {
      id: 4,
      title: "Organic Farming for Health",
      content:
        "Learn how organic farming benefits health and the environment, making it a sustainable choice for the future.",
      image: "https://placehold.co/200x200",
      redirect: "/blog/4",
    },
  ];

  const handleCardClick = (redirect) => {
    navigate(redirect);
  };

  useEffect(() => {
    // Animate Main Story
    const mainStory =
      blogContainerRef.current.querySelector(".blog-main-story");
    gsap.fromTo(
      mainStory,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate Side Stories
    const sideStories =
      blogContainerRef.current.querySelectorAll(".blog-card-side");
    gsap.fromTo(
      sideStories,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-container" ref={blogContainerRef}>
        {/* Main Story */}
        <div
          className="blog-main-story"
          onClick={() => handleCardClick(blogContent[0].redirect)}
        >
          <img
            src={blogContent[0].image}
            alt={blogContent[0].title}
            className="blog-image-main"
          />
          <div className="blog-main-content">
            <h2 className="blog-title-main">{blogContent[0].title}</h2>
            <p className="blog-text-main">{blogContent[0].content}</p>
          </div>
        </div>

        {/* Side Stories */}
        <div className="blog-side-stories">
          {blogContent.slice(1).map((blog) => (
            <div
              className="blog-card-side"
              key={blog.id}
              onClick={() => handleCardClick(blog.redirect)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image-side"
              />
              <div className="blog-side-content">
                <h2 className="blog-title-side">{blog.title}</h2>
                <p className="blog-text-side">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
