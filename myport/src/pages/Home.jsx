import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../assets/images/myimg.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-section">
      {/* 3D Animated Background */}
      <Canvas className="home-canvas">
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 2]} />
        <Sphere args={[1, 100, 200]} scale={4}>
          <MeshDistortMaterial
            color="#f472b6"
            distort={0.5}
            speed={2}
            roughness={0.1}
          />
        </Sphere>
      </Canvas>

      {/* Foreground content */}
      <div className="home-content">
        <motion.img
          src={profile}
          alt="Bhakti Joshi"
          className="home-profile-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="home-name"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Bhakti Joshi
        </motion.h1>

        <motion.p
          className="home-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Developer ⚡ + Founder of{" "}
          <span className="highlight">Gallery 15 Seven</span> 🎨
        </motion.p>

        <motion.div
          className="home-journey"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            <b>2019:</b> Googled “Why is my code not working?” → still asking 😅
          </p>
          <p>
            <b>2020:</b> Fell in love with Angular & NestJS 💻
          </p>
          <p>
            <b>2021:</b> My first project actually ran error-free 🎉
          </p>
          <p>
            <b>2022:</b> Freelancing & teaching web dev 🚀
          </p>
          <p>
            <b>2023:</b> Discovered Flutter + launched Purva Couture 👗
          </p>
          <p>
            <b>2024:</b> Building{" "}
            <span className="highlight"></span> & animated
            portfolios ✨
          </p>
        </motion.div>

        <motion.div
          className="home-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" />
          </a>
          <FaReact className="icon react-icon" />
        </motion.div>
      </div>
    </section>
  );
}
