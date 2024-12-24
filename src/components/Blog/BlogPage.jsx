import React from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();

  // Blog data
  const blogContent = [
    {
      id: 1,
      title: "Ghee: Dairy Without the Discomfort",
      content:
        "Lactose intolerance doesn't mean you have to give up on dairy entirely, especially when it's a time-honored superfood that is naturally free of lactose and casein. For those with lactose sensitivity, ghee offers a rich, flavorful, and nutritious alternative.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Why A2 Cow Milk is Better",
      content:
        "A2 cow milk is easier to digest and is packed with nutrients. Discover why it's becoming a popular choice for health enthusiasts.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "The Story of Our Farm",
      content:
        "From humble beginnings to a sustainable future, read about the journey of our organic farm and its impact on the community.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  // Find the specific blog by id
  const blog = blogContent.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return <p>Blog not found!</p>; // Fallback if the blog doesn't exist
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
