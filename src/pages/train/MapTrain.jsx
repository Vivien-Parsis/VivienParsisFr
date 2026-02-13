import React from "react";
import styles from "../../assets/css/train/train.module.css";
import leaflet from "leaflet";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	ZoomControl,
	Polyline
} from "react-leaflet";
import { center, locations, trajets } from "./utils/";
import RailIcon from "../../assets/images/train/rail-road-svgrepo-com.svg?react";
import { Link } from "react-router";

const MapTrain = () => {
	const forMarker = (locations) => {
		let content = [];
		if (!locations) {
			return;
		}
		for (let key of Object.keys(locations)) {
			const cityPin = leaflet.icon({
				iconUrl: locations[key].icons,
				iconSize: [30, 30],
				popupAnchor: [0, 0]
			});
			content.push(
				<Marker
					position={locations[key].coord}
					icon={cityPin}
					key={key}
				>
					<Popup className={styles.popupLoc}>
						<h2>{key}</h2>
						<Link
							to="/train/city"
							state={{ photos: locations[key].photos, city: key }}
						>
							Voir des photos
						</Link>
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
			let lineColor = "black";
			if (trajets[key].type == "train") {
				lineColor = "orange";
			}
			if (trajets[key].type == "voiture") {
				lineColor = "gray";
			}
			content.push(
				<Polyline
					positions={trajets[key].coords}
					pathOptions={{
						color: lineColor
					}}
					key={key}
				>
					<Popup>
						{key.replace("-", " ").replace("2", "")}
						<br />
						distance : {trajets[key].distance} km
						<br />
						mois : {trajets[key].mois}
						<br />
						type : {trajets[key].type}
					</Popup>
				</Polyline>
			);
		}
		return content;
	};

	const getDistanceTrain = (trajets) => {
		const content = [];
		let month = {};
		let total = 0;
		for (let key of Object.keys(trajets)) {
			if (trajets[key].type == "voiture") {
				continue;
			}
			if (!month[trajets[key].mois]) {
				month[trajets[key].mois] = 0;
			}
			month[trajets[key].mois] +=
				trajets[key].distance * trajets[key].number;
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
						Cette page retrace l'ensemble de mes déplacements en
						train et voiture de 2024 a {new Date().getFullYear()}.
						Les trajets sont représentés sous forme de carte. Les
						trajets oranges ont été realisé en train, les trajets
						ont été realisé en voiture En cliquant sur les icônes
						situées sur la carte, vous pouvez accéder à une galerie
						d'images pour chaque destination. <br />
						En dessous, un récapitulatif des kilomètres accumulés au
						cours de l'année, ainsi qu'une répartition mensuelle.
					</p>
					<span>Distance en train :</span>
					<ul>{getDistanceTrain(trajets)}</ul>
				</div>
			</div>
		</div>
	);
};

export default MapTrain;
