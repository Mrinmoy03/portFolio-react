import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Front-end developer with expertise in React.js, TypeScript, GSAP, Framer Motion, Three.js, and Tailwind CSS. Passionate about building fast",
            1000,
            "Interactive, and visually rich web experiences that blend creativity with performance for seamless user engagement across all devices.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img className="man" src="./src/assets/man.png" alt="mrinmoy" />
    </motion.div>
  );
};

export default Speech;
