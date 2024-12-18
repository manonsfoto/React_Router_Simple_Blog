import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./ArticleTeaser.css";
interface Props {
  imgUrl: string;
  title: string;
  id: number;
}
const ArticleTeaser: React.FC<Props> = ({ imgUrl, title, id }) => {
  return (
    <article className="card">
      <div className="img-box">
        {" "}
        <img src={imgUrl} alt={title} />
      </div>
      <p className="card-title">{title}</p>
      <Link to={`details/${id}`}>
        {" "}
        <Button text={"Read More"} />
      </Link>
    </article>
  );
};

export default ArticleTeaser;
