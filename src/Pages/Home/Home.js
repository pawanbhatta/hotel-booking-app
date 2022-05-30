import React from "react";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="home" />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  );
};

export default Home;
