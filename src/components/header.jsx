import { Link } from "react-router";
import styles from "../assets/css/header.module.css";

const Header = () => {
  return (
    <header style={styles}>
      <Link to="/">
        <h1>VivienP</h1>
      </Link>
    </header>
  );
};

export default Header;
