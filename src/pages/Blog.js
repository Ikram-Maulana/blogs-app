import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <p>The following is a list of blogs obtained through the fetch API:</p>

      {loading ? (
        <i>Loading...</i>
      ) : (
        <div>
          {blogs.map((blog) => (
            <article key={blog.id}>
              <h2>
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h2>
              <time>{new Date(blog.publishedAt).toLocaleDateString()}</time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
