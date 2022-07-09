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
    <section className="p-5">
      <h1 className="section-title">Blog</h1>
      <p className="section-description mb-4">
        The following is a list of blogs obtained through the fetch API:
      </p>

      {loading ? (
        <i>Loading...</i>
      ) : (
        <div className="border-t-[1px] border-solid border-[#eee]">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="border-b-[1px] border-solid border-[#eee] py-5 px-0"
            >
              <h2 className="font-bold text-xl hover:text-blue-700 mb-2">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h2>
              <time className="text-[#999] text-xs">
                {new Date(blog.publishedAt).toLocaleDateString()}
              </time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
