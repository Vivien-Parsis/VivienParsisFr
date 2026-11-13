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
					Une application web avec comme but de proposer une carte
					centralisent les informations sur l'accessibilité des lieux
					et transports.
				</p>
				<p>Techno</p>
				<ul>
					<li>Node.js</li>
					<li>Express</li>
					<li>Vite</li>
					<li>React</li>
					<li>PostgreSQL</li>
				</ul>
				<Link to="https://handimap.onrender.com/" target="_blank">
					{">"} Voir le projet
				</Link>
				<Link
					to="https://github.com/Vivien-Parsis/handiMap"
					target="_blank"
				>
					{">"} Voir le code source
				</Link>
				<Link
					to="https://handimap-back.onrender.com/api-docs"
					target="_blank"
				>
					{">"} Voir la documentation de l'api
				</Link>
			</div>
			<div className={styles.project}>
				<h2>SlayZombie</h2>
				<p>
					FPS rétro post-apocalyptique en 3D / sprites 2D inspiré des classiques Doom (1 & 2).
					Le jeu est jouable directement dans le navigateur ou via une application de bureau Windows (Electron).
				</p>
				<p>Techno</p>
				<ul>
					<li>Node.js</li>
					<li>React</li>
					<li>Vite</li>
				</ul>
				<Link to="https://slayzombie.vivienp.fr/" target="_blank">
					{">"} Voir le projet
				</Link>
				<Link
					to="https://github.com/Vivien-Parsis/SlayZombie"
					target="_blank"
				>
					{">"} Voir le code source
				</Link>
			</div>
		</div>
	);
};

export default Project;
