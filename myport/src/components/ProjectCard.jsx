import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        padding: "1.5rem",
        borderRadius: "12px",
        background: "linear-gradient(145deg, #1e1e2f, #151521)",
        boxShadow: "0px 0px 12px rgba(0, 234, 255, 0.4)",
      }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </motion.div>
  );
}
