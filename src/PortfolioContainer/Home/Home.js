import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import BottomCurve from "./BottomCurve/BottomCurve";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <HeaderNavBar />
      <Profile />
      <BottomCurve />
    </section>
  );
};

export default Home;
