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
						{locations[key].photos.length > 0 ? (
							<Link
								to="/train/city"
								state={{
									photos: locations[key].photos,
									city: key
								}}
							>
								Voir des photos
							</Link>
						) : ""}
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
			<li key="total" className={`${styles.statCard} ${styles.totalCard}`}>
				<RailIcon className={styles.statIcon} />
				<div className={styles.statText}>
					<span className={styles.statLabel}>Distance totale</span>
					<strong className={styles.statValue}>
						{total.toLocaleString("fr-FR")} km
					</strong>
				</div>
			</li>
		);
		for (let key of Object.keys(month)) {
			content.push(
				<li key={key} className={styles.statCard}>
					<RailIcon className={styles.statIcon} />
					<div className={styles.statText}>
						<span className={styles.statLabel}>{key}</span>
						<strong className={styles.statValue}>
							{month[key].toLocaleString("fr-FR")} km
						</strong>
					</div>
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
					<div className={styles.infoContent}>
						<div className={styles.introCard}>
							<h2 className={styles.infoTitle}>
								Carnet de trajets (2024 – {new Date().getFullYear()})
							</h2>
							<p className={styles.infoDescription}>
								Cette page retrace l&apos;ensemble de mes déplacements
								en train et en voiture de 2024 à{" "}
								{new Date().getFullYear()}. Sur la carte, les
								trajets{" "}
								<span className={styles.badgeTrain}>orange</span>{" "}
								ont été réalisés en train et les trajets{" "}
								<span className={styles.badgeCar}>gris</span> en
								voiture. En cliquant sur les icônes situées sur la
								carte, vous pouvez accéder à une galerie
								d&apos;images pour chaque destination.
							</p>
							<p className={styles.infoSubtext}>
								Retrouvez ci-dessous le récapitulatif des kilomètres
								parcourus en train ainsi que leur répartition
								mensuelle.
							</p>
						</div>

						<div className={styles.statsSection}>
							<h3 className={styles.statsTitle}>
								Distance parcourue en train
							</h3>
							<ul className={styles.statsGrid}>
								{getDistanceTrain(trajets)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapTrain;
