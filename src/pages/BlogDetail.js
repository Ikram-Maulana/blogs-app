import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const [Blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
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
        console.log(error);
      }
    };
    getBlog();
  }, [id]);

  return (
    <section>
      {loading ? (
        <i>Loading...</i>
      ) : (
        <div>
          <article>
            <h2>{Blog.title}</h2>
            <time>{new Date(Blog.publishedAt).toLocaleDateString()}</time>
            <img src={Blog.imageUrl} alt={Blog.title} />
            <p>{Blog.summary}</p>
            <p>
              Source:{" "}
              <a href={Blog.url} target="_blank" rel="noreferrer">
                {Blog.newsSite}
              </a>
            </p>
          </article>
        </div>
      )}
    </section>
  );
};

export default BlogDetail;
