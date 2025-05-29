import React from "react";
import styles from "../../assets/css/project/project.module.css";
import { Link } from "react-router";

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <h1>Mes projets</h1>
      <div className={styles.project}>
        <h2>Handi'Map</h2>
        <p>
          Une application web avec comme but de proposer une carte centralisent
          les informations sur l'accessibilité des lieux et transports.
        </p>
        <p>Techno</p>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Vite</li>
          <li>React</li>
        </ul>
        <Link to="https://handimap.onrender.com/" target="_blank">
          {">"} Voir le projet
        </Link>
        <Link to="https://github.com/Vivien-Parsis/handiMap" target="_blank">
          {">"} Voir le code source
        </Link>
      </div>
    </div>
  );
};

export default Project;
