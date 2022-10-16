import "./starwarsintro.css";
import { Container, Row, Col } from "react-bootstrap";
import nthlogo from "../../../assets/nth-logo.png";
import { useState, useEffect } from 'react';

export const StarWars = () => {
  // const [second,setSecond]=useState(0);
  // useEffect(() => {
  //   setInterval(()=>{
  //     console.log('mount')
  //     setSecond(second=>second+1);
  //   },6000);
  //   console.log('outside time out')
  // }, []);
  return (
    <div className="about-us">
      {/* <!-- Place in Body where you'd like intro to appear --> */}
      <div class="star-wars-intro">

        {/* <!-- Blue Intro Text --> */}
        <p class="intro-text">
          PICT IEEE Student Branch presents...
        </p>

        {/* <!-- Logo Image or Text goes in here --> */}
        <h2 class="main-logo">
          <img src={nthlogo} />
        </h2>

        {/* <!-- All Scrolling Content Goes in here --> */}
        <div class="main-content">

          <div class="title-content">
            <p class="content-header">Network Treasure Hunt<br />Decrypt The Encrypted</p>

            <br />

            <p class="content-body">
              Network Treasure Hunt is an online Treasure Hunt played across
              the globe. Read between the lines, find the hidden clues and
              connect the dots. You can use every tool at your disposal.
              Even with Google and Wikipedia by your side, it's going to be
              fun and challenging.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

// export default StarWars;

export const StarWars1 = () => {
  // const [second,setSecond]=useState(0);
  // useEffect(() => {
  //   setInterval(()=>{
  //     console.log('mount')
  //     setSecond(second=>second+1);
  //   },6000);
  //   console.log('outside time out')
  // }, []);
  return (
    <div className="about-us">
      {/* <!-- Place in Body where you'd like intro to appear --> */}
      <div class="star-wars-intro">

        {/* <!-- Blue Intro Text --> */}
        <p class="intro-text">
          PICT IEEE Student Branch presents...
        </p>

        {/* <!-- Logo Image or Text goes in here --> */}
        <h2 class="main-logo">
          <img src={nthlogo} />
        </h2>

        {/* <!-- All Scrolling Content Goes in here --> */}
        <div class="main-content">

          <div class="title-content">
            <p class="content-header">Network Treasure Hunt<br />Decrypt The Encrypted</p>

            <br />

            <p class="content-body">
              Network Treasure Hunt is an online Treasure Hunt played across
              the globe. Read between the lines, find the hidden clues and
              connect the dots. You can use every tool at your disposal.
              Even with Google and Wikipedia by your side, it's going to be
              fun and challenging.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

// export default StarWars1;
