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
      <section className="main-textBox">
        <h1 className="headline">
          Welcome to my
          <br /> simple Blog
        </h1>
        <Link to={"/blog"}>
          <Button text={"Go to articles"} />{" "}
        </Link>
      </section>
    </>
  );
};

export default Home;
