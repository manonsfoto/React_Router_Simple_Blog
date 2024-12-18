import { useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import { blogData } from "../../../blogData";
import IBlogData from "../../interface/IBlogData";
const Details = () => {
  const [singleBlog, setSingleBlog] = useState<null | IBlogData>(null);
  const { details } = useParams();

  useEffect(() => {
    if (details && blogData) {
      const findBlogById = blogData.find(
        (singleBlog) => Number(singleBlog.id) === Number(details)
      );
      setSingleBlog(findBlogById || null);
    } else {
      console.log("details oder blogData nicht gefunden");
    }
  }, [details]);

  if (!singleBlog) return <p>Loading...</p>;
  return (
    <section className="stn-details flex">
      <img src={singleBlog.img_url} alt={singleBlog.title} />
      <article>
        <div className="details-title flex">
          <h1>{singleBlog.title}</h1>
          <p className="date">{singleBlog.published_date}</p>
        </div>
        <p className="desc">{singleBlog.description}</p>
        <p className="author">By {singleBlog.author}</p>
      </article>
    </section>
  );
};

export default Details;
