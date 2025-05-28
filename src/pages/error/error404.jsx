import React from "react";
import styles from "../../assets/css/error/error404.module.css";
import { Link } from "react-router";

const error404 = () => {
  return (
    <div className={styles.errorBackground}>
      <div className={styles.errorContainer}>
        <h1>Error 404</h1>
        <p>
          page not found
          <br />
          <Link to="/">Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default error404;
