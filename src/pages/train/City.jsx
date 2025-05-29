import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Carousel } from "antd";
import styles from "../../assets/css/train/city.module.css";

const City = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const photos = location.state?.photos || [];
  const city = location.state?.city || "";
  const getPhoto = (photos) => {
    if (!photos) {
      return;
    }
    const content = [];
    for (let i = 0; i < photos.length; i++) {
      content.push(
        <div className={styles.contentStyle}>
          <img src={photos[i]} key={i} alt="" />
        </div>
      );
    }
    return content;
  };
  useEffect(() => {
    if (!photos || !city) {
      navigate("/train");
    }
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h2>{city}</h2>
        <Carousel arrows draggable={true} autoplay autoplaySpeed={10000}>
          {getPhoto(photos)}
        </Carousel>
      </div>
      <Link to="/train">Revenir sur la carte</Link>
    </div>
  );
};

export default City;
