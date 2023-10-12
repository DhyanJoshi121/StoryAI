import React from "react";
import "../css/homeScreen.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <>
      <Header btnName="Try it now" disable={false} />
      <main className="hero">
        <div className="heroLeft">
          <div className="title">
            Write your <br />
            dream story
          </div>
          <p className="tagline">
            Unleash Your Imagination with AI-Powered Stories.
          </p>
          <Link to="/storyai" className="getStartedNowBtn">
            Get Started Now
          </Link>
        </div>
        <div className="heroRight">
          <div className="container">
            <img
              className="mainImg"
              alt="mainImg"
              src="/maegan-martin-6nsGg3Iw37c-unsplash.jpg"
            />
            <div className="rectangle1" />
            <div className="rectangle2" />
            <div className="rectangle3" />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
