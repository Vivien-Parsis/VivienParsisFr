import React, { useEffect, useRef } from "react";
import styles from "../../assets/css/project/project.module.css";
import { Link } from "react-router";

const MATRIX_CHARS =
	"ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]∆◊§¤";
const FONT_SIZE = 8;

const getRandomChar = () =>
	MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

const getRandomSpeed = () => 0.08 + Math.random() * 0.12;

const Project = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		let animationFrameId;
		let drops = [];
		let speeds = [];
		const motionQuery = globalThis.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);

		const initCanvas = () => {
			canvas.width = globalThis.innerWidth;
			canvas.height = globalThis.innerHeight;

			const columns = Math.ceil(canvas.width / FONT_SIZE);
			drops = Array.from({ length: columns }, (_, i) =>
				drops[i] ?? Math.random() * -(canvas.height / FONT_SIZE)
			);
			speeds = Array.from(
				{ length: columns },
				(_, i) => speeds[i] ?? getRandomSpeed()
			);

			ctx.fillStyle = "#1a1d24";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		};

		const drawColumn = (index) => {
			const prevRow = Math.floor(drops[index]);
			drops[index] += speeds[index];
			const currentRow = Math.floor(drops[index]);

			if (currentRow !== prevRow && currentRow >= 0) {
				const x = index * FONT_SIZE;
				const y = currentRow * FONT_SIZE;

				ctx.shadowBlur = 8;
				ctx.shadowColor = "#00e5ff";
				ctx.fillStyle = Math.random() > 0.85 ? "#80f3ff" : "#00bfff";
				ctx.fillText(getRandomChar(), x, y);
				ctx.shadowBlur = 0;
			}

			if (
				drops[index] * FONT_SIZE > canvas.height &&
				Math.random() > 0.975
			) {
				drops[index] = Math.random() * -20;
				speeds[index] = getRandomSpeed();
			}
		};

		const draw = () => {
			if (motionQuery.matches) return;

			ctx.fillStyle = "rgba(26, 29, 36, 0.05)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.font = `${FONT_SIZE}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				drawColumn(i);
			}

			animationFrameId = requestAnimationFrame(draw);
		};

		initCanvas();
		globalThis.addEventListener("resize", initCanvas);

		if (!motionQuery.matches) {
			animationFrameId = requestAnimationFrame(draw);
		}

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
			globalThis.removeEventListener("resize", initCanvas);
		};
	}, []);

	return (
		<div className={styles.projectContainer}>
			<canvas
				ref={canvasRef}
				className={styles.matrixCanvas}
			/>
			<div className={styles.contentWrapper}>
				<h1 className={styles.pageTitle}>Mes projets</h1>
				<div className={styles.projectList}>
					<div className={styles.project}>
						<h2>Handi'Map</h2>
						<p>
							Une application web avec comme but de proposer une
							carte centralisant les informations sur
							l'accessibilité des lieux et transports.
						</p>
						<p className={styles.techLabel}>Techno</p>
						<ul className={styles.techList}>
							<li>Node.js</li>
							<li>Express</li>
							<li>Vite</li>
							<li>React</li>
							<li>PostgreSQL</li>
						</ul>
						<div className={styles.links}>
							<Link
								to="https://handimap.onrender.com/"
								target="_blank"
							>
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
					</div>
					<div className={styles.project}>
						<h2>SlayZombie</h2>
						<p>
							FPS rétro post-apocalyptique en 3D / sprites 2D
							inspiré des classiques Doom (1 & 2). Le jeu est
							jouable directement dans le navigateur ou via une
							application de bureau Windows (Electron).
						</p>
						<p className={styles.techLabel}>Techno</p>
						<ul className={styles.techList}>
							<li>Node.js</li>
							<li>React</li>
							<li>Vite</li>
						</ul>
						<div className={styles.links}>
							<Link
								to="https://slayzombie.vivienp.fr/"
								target="_blank"
							>
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
				</div>
			</div>
		</div>
	);
};

export default Project;
