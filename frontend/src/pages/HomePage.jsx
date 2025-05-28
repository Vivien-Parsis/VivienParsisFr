import React from "react";
import GithubIcon from "../assets/images/linktree_github-142-svgrepo-com.svg?react";
import LinkedinIcon from "../assets/images/linktree_linkedin-svgrepo-com.svg?react";
import TrainIcon from "../assets/images/train-svgrepo-com.svg?react";
import styles from "../assets/css/homePage.module.css";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <section className={styles.section1}>
      <div>
        <h1>Vivien PARSIS</h1>
        <h3>Développeur web</h3>
        <span>
          <Link to="https://github.com/Vivien-Parsis">
            <GithubIcon alt="icon linktree" />
          </Link>
          <Link to="https://www.linkedin.com/in/vivien-parsis-9618361b2/">
            <LinkedinIcon alt="linkedin icon" />
          </Link>
          <Link to="/train">
            <TrainIcon alt="train icon" />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default HomePage;
