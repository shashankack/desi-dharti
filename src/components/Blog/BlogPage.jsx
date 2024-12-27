import React from "react";
import { useParams } from "react-router-dom";
import "./BlogPage.css";

import blog_1_image_1 from "../../assets/blog-images/blog-1-image-1.png";
import blog_1_image_2 from "../../assets/blog-images/blog-1-image-2.jpg";
import blog_1_image_3 from "../../assets/blog-images/blog-1-image-3.jpg";

import blog_2_image_1 from "../../assets/blog-images/blog-2-image-1.png";

import blog_3_image_1 from "../../assets/blog-images/blog-3-image-1.png";

import blog_4_image_1 from "../../assets/blog-images/blog-4-image-1.png";

const BlogPage = () => {
  const { blogId } = useParams();

  // Blog data
  const blogContent = [
    {
      id: 1,
      title: "Ghee: Dairy Without the Discomfort",
      content: [
        "Lactose intolerance doesn't mean you have to give up on dairy entirely-especially when it comes to ghee, a time-honored superfood that is naturally free of lactose and casein.",
        "For those with lactose sensitivity, ghee offers a rich, flavorful, and nutritious alternative. The secret lies in ghee's traditional preparation process. During clarification, milk solids containing lactose and casein are removed, leaving behind pure butterfat. This makes ghee suitable for most people with lactose intolerance while retaining its robust flavor and incredible health benefits.",
        <span>
          Beyond being lactose-free, ghee is a powerhouse of nutrition. It's
          rich in fat-soluble vitamins like <strong>A</strong>,{" "}
          <strong>D</strong>, <strong>E</strong>, and <strong>K</strong>, which
          support immunity, vision, and bone health.
        </span>,
        "To ensure purity and maximum health benefits, always choose high-quality, traditionally made ghee, such as Desi Dharthi's A2 Ghee, prepared from the milk of native Gir cows. With ghee, you can enjoy the goodness of dairy without the discomfort of lactose—making it an essential addition to your lactose-sensitive lifestyle!",
      ],

      image: blog_1_image_1,
    },
    {
      id: 2,
      title: "Why A2 Cow Milk is Better",
      content: [
        "When it comes to milk, the debate between raw milk and boiled milk is an age-old one. At Desi Dharthi, we believe in empowering you to make the best choice for your health by providing farm-fresh, premium-quality A2 milk from native Indian cows.",
        <strong>Raw Milk:</strong>,
        "Raw milk is milk in its pure, unprocessed form, packed with natural enzymes, vitamins, and probiotics. These nutrients support digestion, immunity, and overall wellness. Sourced from healthy, well-cared-for Gir cows, Desi Dharthi’s raw A2 milk offers unmatched freshness and purity.",
        <span>
          <p style={{ marginTop: "-1rem" }}>
            However, consuming raw milk requires trust in the source to ensure
            hygiene and safety—a commitment Desi Dharthi proudly upholds.
          </p>
        </span>,
        <strong>Boiled Milk:</strong>,
        "Boiled milk, while slightly lower in heat-sensitive nutrients like Vitamin C, offers peace of mind by eliminating potential pathogens. It retains essential nutrients like protein, calcium, and fat, making it a staple for households that prioritize safety and tradition.",
        <span>
          <p style={{ marginTop: "-1rem" }}>
            Desi Dharthi's A2 milk maintains its creamy taste and nutrition,
            even after boiling.
          </p>
        </span>,
        "At Desi Dharthi, we deliver milk that is clean, fresh, and cruelty-free, allowing you to enjoy it raw or boiled according to your preferences. Whether you value raw milk’s unaltered nutrition or boiled milk’s safety, you can trust our milk to be pure, ethical, and naturally rich.",
      ],

      image: blog_2_image_1,
    },
    {
      id: 3,
      title: "Gir Cows: The Heart of Desi Dharthi’s Dairy",
      content: [
        "At Desi Dharthi, we take immense pride in the heritage and quality of our milk, and it all begins with our exceptional cows. Among the stars of our farms is the Gir cow, one of India’s most revered indigenous breeds. Known for its unmatched ability to produce pure A2 milk, the Gir cow is at the heart of our commitment to health, tradition, and sustainability.",
        <strong>Why Gir Cows?</strong>,
        "The Gir cow is celebrated for its unique genetic traits that naturally produce A2 beta-casein protein, a form of milk that is easier to digest and packed with nutrients. With their sturdy build, distinct curved horns, and gentle nature, Gir cows are perfectly adapted to Indian climates, thriving naturally on grazing without the need for intensive care.",
        "At Desi Dharthi, we ensure our Gir cows are raised in a cruelty-free environment where they graze freely, are well-fed, and are milked only after their calves are nourished. This ethical approach not only ensures the health of our cows but also the purity and richness of the milk they produce.",
        "By choosing Desi Dharthi A2 milk, you are not just consuming milk; you are supporting the preservation of India’s Gir cow breed, promoting ethical farming, and embracing nature’s purest offering.",
      ],
      image: blog_3_image_1,
    },

    {
      id: 4,
      title: "A2 Milk and Its Products: Tradition Meets Nutrition",
      content: [
        "At Desi Dharthi, we are committed to delivering dairy that’s pure, natural, and deeply rooted in Indian tradition. Our A2 milk, sourced exclusively from native cow breeds like Gir, offers a wealth of health benefits while being free from the digestive discomfort often associated with regular milk. Alongside A2 milk, we craft a range of premium products that embody the richness of tradition and nutrition.",
        <strong>What is A2 Milk?</strong>,
        "A2 milk is a type of cow’s milk that contains only the A2 beta-casein protein, unlike regular milk, which contains a mix of A1 and A2 proteins. This distinction is significant because the A1 protein can release a compound called BCM-7 during digestion, which may cause bloating, discomfort, or inflammation in sensitive individuals.",
        "A2 milk, on the other hand, is easier to digest, making it an ideal choice for people with mild lactose intolerance or protein sensitivity. Rich in calcium, high-quality protein, Vitamin D, and Omega-3 fatty acids, A2 milk is a powerhouse of nutrition for people of all ages.",
        "By choosing Desi Dharthi’s A2 milk, you’re not only prioritizing your health but also supporting ethical farming practices and the preservation of India’s native cow breeds. Embrace a tradition of purity and wellness with every sip of our A2 milk.",
      ],
      image: blog_4_image_1,
    },
  ];

  // Find the specific blog by id
  const blog = blogContent.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return <p>Blog not found!</p>; // Fallback if the blog doesn't exist
  }

  return (
    <section className="blog-page-section">
      <div className="blog-page-container">
        <div className="blog-image-container">
          <img src={blog.image} alt={blog.title} className="blog-page-image" />
        </div>
        <div className="blog-page-content">
          <h1>{blog.title}</h1>
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
