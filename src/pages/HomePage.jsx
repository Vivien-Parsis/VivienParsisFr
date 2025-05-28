import React from "react";
import GithubIcon from "../assets/images/linktree_github-142-svgrepo-com.svg?react";
import LinkedinIcon from "../assets/images/linktree_linkedin-svgrepo-com.svg?react";
import TrainIcon from "../assets/images/train-svgrepo-com.svg?react";
import ProjectIcon from "../assets/images/project-svgrepo-com.svg?react";
import styles from "../assets/css/homePage.module.css";
import { Link } from "react-router";
import { Tooltip } from "antd";

const HomePage = () => {
  return (
    <section className={styles.section1}>
      <div>
        <h1>Vivien PARSIS</h1>
        <h3>Développeur web</h3>
        <span>
          <Tooltip title="Github">
            <Link to="https://github.com/Vivien-Parsis" target="_blank">
              <GithubIcon alt="icon linktree" />
            </Link>
          </Tooltip>
          <Tooltip title="Linkedin">
            <Link
              to="https://www.linkedin.com/in/vivien-parsis-9618361b2/"
              target="_blank"
            >
              <LinkedinIcon alt="linkedin icon" />
            </Link>
          </Tooltip>
          <Tooltip title="Train">
            <Link to="/train">
              <TrainIcon alt="train icon" />
            </Link>
          </Tooltip>
          <Tooltip title="Projet">
            <Link to="/projet">
              <ProjectIcon alt="project icon" />
            </Link>
          </Tooltip>
        </span>
      </div>
    </section>
  );
};

export default HomePage;
