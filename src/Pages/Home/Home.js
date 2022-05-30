import React from "react";
import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="home" />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
