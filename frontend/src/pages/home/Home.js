import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/hiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <FaWarehouse size={70} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
          <li>
            <Link to="/register">Register</Link>
          </li>
          </ShowOnLogout>
          <ShowOnLogout> <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
          </ShowOnLogout>
          <ShowOnLogin>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-txt">
          <h2 className="--color-white">Warehouse Management Solution</h2>
          <p className="--color-white">
            Our Warehouse Management Solution is designed to empower you with
            the tools and insights you need to take control of your warehouse
            operations and drive efficiency.
            Say goodbye to manual processes, misplaced inventory, and inefficient workflows.
            
          </p>

          {/* <div className="hero-buttons">
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Join us now!</Link>
            </button>
          </div> */}

          <div className=" --flex-start">
            <NumberText num="700" text="Brand Owners" />
            <NumberText num="1200" text="Active Users" />
            <NumberText num="1000+" text="Partners" />
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h2 className="--color-white">{num}</h2>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
