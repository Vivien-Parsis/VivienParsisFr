import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Carousel } from "antd";
import styles from "../../assets/css/train/city.module.css";

const PARTICLE_COUNT = 45;

const createParticle = (width, height) => ({
	x: Math.random() * width,
	y: Math.random() * height,
	radius: 1.5 + Math.random() * 3,
	speedX: (Math.random() - 0.5) * 0.35,
	speedY: -0.15 - Math.random() * 0.35,
	alpha: 0.2 + Math.random() * 0.55
});

const City = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const canvasRef = useRef(null);
	const photos = location.state?.photos || [];
	const city = location.state?.city || "";
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		if (!photos.length || !city) {
			Promise.resolve(navigate("/train")).catch(() => {});
		}
	}, [photos.length, city, navigate]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		let animationFrameId;
		let particles = [];
		const motionQuery = globalThis.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);

		const initCanvas = () => {
			canvas.width = globalThis.innerWidth;
			canvas.height = globalThis.innerHeight;
			particles = Array.from({ length: PARTICLE_COUNT }, () =>
				createParticle(canvas.width, canvas.height)
			);
		};

		const updateParticle = (p) => {
			p.x += p.speedX;
			p.y += p.speedY;

			if (p.y < -10) {
				p.y = canvas.height + 10;
				p.x = Math.random() * canvas.width;
			}
			if (p.x < -10) {
				p.x = canvas.width + 10;
			} else if (p.x > canvas.width + 10) {
				p.x = -10;
			}
		};

		const drawParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const p of particles) {
				if (!motionQuery.matches) {
					updateParticle(p);
				}
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(158, 207, 169, ${p.alpha})`;
				ctx.shadowBlur = 12;
				ctx.shadowColor = "#69e398";
				ctx.fill();
				ctx.shadowBlur = 0;
			}

			if (!motionQuery.matches) {
				animationFrameId = requestAnimationFrame(drawParticles);
			}
		};

		initCanvas();
		drawParticles();
		globalThis.addEventListener("resize", initCanvas);

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
			globalThis.removeEventListener("resize", initCanvas);
		};
	}, []);

	return (
		<div className={styles.container}>
			<canvas ref={canvasRef} className={styles.bgCanvas} />
			<div className={styles.galleryWrapper}>
				<div className={styles.cityHeader}>
					<Link to="/train" className={styles.returnLink}>
						{"←"} Revenir sur la carte
					</Link>
					<div className={styles.titleGroup}>
						<h2>{city}</h2>
						{photos.length > 0 && (
							<span className={styles.photoCounter}>
								Photo {currentSlide + 1} / {photos.length}
							</span>
						)}
					</div>
				</div>

				<div className={styles.carouselCard}>
					<Carousel
						arrows
						draggable
						autoplay
						autoplaySpeed={10000}
						afterChange={(index) => setCurrentSlide(index)}
					>
						{photos.map((photoUrl, index) => (
							<div key={photoUrl} className={styles.slideWrapper}>
								<div className={styles.contentStyle}>
									<img
										src={photoUrl}
										alt={`${city} - vue ${index + 1}`}
										loading="lazy"
									/>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default City;
