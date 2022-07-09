import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.clear();
        setNotFound(true);
      }
    };
    getBlog();
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <section className="p-5">
      {loading ? (
        <i>Loading...</i>
      ) : (
        <div>
          <article>
            <h2>{blog.title}</h2>
            <time>{new Date(blog.publishedAt).toLocaleDateString()}</time>
            <img src={blog.imageUrl} alt={blog.title} />
            <p>{blog.summary}</p>
            <p>
              Source:{" "}
              <a href={blog.url} target="_blank" rel="noreferrer">
                {blog.newsSite}
              </a>
            </p>
          </article>
        </div>
      )}
    </section>
  );
};

export default BlogDetail;
