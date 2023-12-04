import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer my-5">
      <footer>
        <div className="container p-5">
          <div className="row pb-2">
            <div className="col-12 text-center">
              <a
                href="mailto:olhastepko2020@gmail.com"
                rel="noreferrer"
                className="email animation-link"
              >
                olhastepko2020@gmail.com
              </a>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-12 d-flex justify-content-center">
              <a
                href="https://github.com/Lia-O1"
                target="_blank"
                title="Github profile"
                rel="noreferrer"
              >
                <FaGithub className="social-icon p-2 m-2 rounded-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/olha-stepko/"
                target="_blank"
                title="LinkedIn profile"
                rel="noreferrer"
              >
                <FaLinkedinIn className="social-icon p-2 m-2 rounded-2" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
