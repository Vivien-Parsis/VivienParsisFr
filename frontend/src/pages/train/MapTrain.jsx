import React from "react";
import styles from "../../assets/css/train/train.module.css";
import CityPinImg from "../../assets/images/train/town-svgrepo-com.png";
import leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Polyline,
} from "react-leaflet";
import { center, locations, trajets } from "./location";
import RailIcon from "../../assets/images/train/rail-road-svgrepo-com.svg?react";

const MapTrain = () => {
  const cityPin = leaflet.icon({
    iconUrl: CityPinImg,
    iconSize: [30, 30],
    popupAnchor: [0, 0],
  });
  const forMarker = (locations) => {
    let content = [];
    if (!locations) {
      return;
    }
    for (let key of Object.keys(locations)) {
      content.push(
        <Marker position={locations[key].coord} icon={cityPin} key={key}>
          <Popup className={styles.popupLoc}>
            <h2>{key}</h2>
          </Popup>
        </Marker>
      );
    }
    return content;
  };

  const forLine = (trajets) => {
    let content = [];
    if (!trajets) {
      return;
    }
    for (let key of Object.keys(trajets)) {
      content.push(
        <Polyline
          positions={trajets[key].coords}
          pathOptions={{ color: "orange" }}
          key={key}
        >
          <Popup>
            {key.replace("-", " ").replace("2", "")}
            <br />
            distance : {trajets[key].distance} km
            <br />
            mois : {trajets[key].mois}
          </Popup>
        </Polyline>
      );
    }
    return content;
  };

  const getDistance = (trajets) => {
    const content = [];
    let month = {};
    let total = 0;
    for (let key of Object.keys(trajets)) {
      if (!month[trajets[key].mois]) {
        month[trajets[key].mois] = 0;
      }
      month[trajets[key].mois] += trajets[key].distance * trajets[key].number;
      total += trajets[key].distance * trajets[key].number;
    }
    content.push(
      <li key="total">
        <RailIcon />
        distance total : {total} km
      </li>
    );
    for (let key of Object.keys(month)) {
      content.push(
        <li key={key}>
          <RailIcon />
          {key} : {month[key]} km
        </li>
      );
    }
    return content;
  };
  return (
    <div className={styles.mapTrain}>
      <MapContainer
        center={center}
        zoom={6}
        className={styles.mapLeaflet}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        {forMarker(locations)}
        {forLine(trajets)}
      </MapContainer>
      <div className={styles.infoBackground}>
        <div className={styles.infoContainer}>
          <p>
            Cette page retrace l'ensemble de mes déplacements en train pour
            l'année 2024, ainsi que pour les années futures. Les trajets sont
            représentés sous forme de carte. En cliquant sur les icônes photo
            situées sur la carte, vous pouvez accéder à une galerie d'images
            pour chaque destination. <br />
            En dessous, un récapitulatif des kilomètres accumulés au cours de
            l'année, ainsi qu'une répartition mensuelle.
          </p>
          <ul>{getDistance(trajets)}</ul>
        </div>
      </div>
    </div>
  );
};

export default MapTrain;
