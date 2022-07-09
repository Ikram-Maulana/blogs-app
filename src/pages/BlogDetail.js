import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
import { Breadcrumb } from "flowbite-react";
import HiBlog from "../components/HiBlog";
import slugify from "slugify";

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
        document.title = `${response.data.title} - The React Project`;
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

  const checkLength = (value) => {
    if (slugify(value).length > 22) {
      let slug = slugify(value).substring(0, 22) + "...";
      return slug;
    }
    return slugify(value);
  };

  return (
    <section className="container p-5 mx-auto">
      {loading ? (
        <i>Loading...</i>
      ) : (
        <div>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Link to="/blog">
              <Breadcrumb.Item icon={HiBlog}>Blog</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item>{checkLength(blog.title)}</Breadcrumb.Item>
          </Breadcrumb>
          <article className="py-5 px-0">
            <h2 className="section-title">{blog.title}</h2>
            <time className="text-[#999] text-xs">
              {new Date(blog.publishedAt).toLocaleDateString()}
            </time>
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full my-5 max-h-64 object-cover rounded-lg"
            />
            <p className="leading-6">{blog.summary}</p>
            <p className="text-[#999] my-4 font-normal">
              Source:{" "}
              <a
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
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
