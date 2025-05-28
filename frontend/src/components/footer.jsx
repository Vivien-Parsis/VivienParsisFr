import React from "react";
import { Link } from "react-router";
import styles from "../assets/css/footer.module.css";

const Footer = () => {
  return (
    <footer style={styles}>
      <Link to="/">Mention légales</Link>
    </footer>
  );
};

export default Footer;
