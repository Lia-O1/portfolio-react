import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tsukiNoYoru from "../images/tsuki-no-yoru-website.png";
import weatherToday from "../images/weather-web-app.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div class="d-flex flex-column ustify-content-center align-items-center text-center">
        <h2>Hi, I am</h2>
        <h1>Olha Stepko</h1>
        <h3>Front-end developer, based in Australia</h3>
        <div class="d-flex justify-content-center text-center mt-4 buttons">
          <button href="/about-me.html" class="primary-btn rounded-2 me-3">
            <NavLink to="/contact" className="link">
              About me
            </NavLink>
          </button>
          <button href="/contact-me.html" class="secondary-btn rounded-2 ms-3">
            <NavLink to="/contact" className="link">
              Contact me
            </NavLink>
          </button>
        </div>
      </div>
      <div className="space py-5 ">
        <div class="d-flex flex-column between-parts">
          <div class="d-flex justify-content-start">
            Take a look at my portfolio - projects
          </div>
        </div>
      </div>
      <div className="py-5">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 mb-3 mt-3">
              <a
                href="https://sparkling-sundae-e35163.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div class="d-flex flex-column b-shadow rounded-2 project ">
                  <div class="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
                    <div class="image-transition">
                      <img
                        src={tsukiNoYoru}
                        alt="Tsuki No Yoru Preview"
                        class="b-shadow rounded-2 w-100"
                      />
                    </div>
                  </div>
                  <div class="d-flex justify-content-start p-3">
                    Tsuki No Yoru
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3 mt-3">
              <a
                href="https://jovial-bienenstitch-a81bd9.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div class="d-flex flex-column rounded-2 project b-shadow">
                  <div class="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
                    <div class="image-transition">
                      <img
                        src={weatherToday}
                        alt="WeatherToday Preview"
                        class="b-shadow rounded-2 w-100"
                      />
                    </div>
                  </div>
                  <div class="d-flex justify-content-start p-3">
                    WeatherToday
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
