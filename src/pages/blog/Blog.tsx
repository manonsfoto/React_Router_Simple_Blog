import ArticleTeaser from "../../components/articleTeaser/ArticleTeaser";
import { blogData } from "../../../blogData";
import IBlogData from "../../interface/IBlogData";

const Blog = () => {
  return (
    <section className="list-wrapper flex">
      {blogData.map((singleBlog: IBlogData) => (
        <ArticleTeaser
          key={singleBlog.id}
          imgUrl={singleBlog.img_url}
          title={singleBlog.title}
          id={singleBlog.id}
        />
      ))}
    </section>
  );
};

export default Blog;
