import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./Home.css";
import imgHome from "/public/img/home.jpg";
const Home = () => {
  return (
    <>
      <section className="stn-mainImage">
        <img src={imgHome} alt="blog image" />
      </section>
      <section>
        <h1 className="headline">Welcome to my simple Blog</h1>
        <Link to={"/blog"}>
          <Button />{" "}
        </Link>
      </section>
    </>
  );
};

export default Home;
