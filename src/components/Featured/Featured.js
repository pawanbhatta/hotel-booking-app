import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Rome</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://www.jetsetter.com//uploads/sites/7/2018/05/KcnKoYek-1380x1035.jpeg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Prague</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.squarespace-cdn.com/content/v1/58c35a0e579fb3281396b7f0/1628458542759-OK8SBUDGTD83DX42H64X/paris+perfect?format=1000w"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
