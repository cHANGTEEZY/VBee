"use client";

import { useEffect } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";

import { aboutUsData } from "@/constants/abouts";

interface AboutUsSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Our Company
      </motion.h1>

      {aboutUsData.map((section) => (
        <AboutUsSection key={section.title} {...section} />
      ))}
    </div>
  );
};

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(
        title.replace(/\s+/g, "-").toLowerCase()
      );
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;

        if (isVisible) {
          controls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, title]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isReversed ? -50 : 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      id={title.replace(/\s+/g, "-").toLowerCase()}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 mb-24 items-center`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="w-full md:w-1/2" variants={imageVariants}>
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-auto object-cover aspect-[4/3]  transition-transform duration-700"
          />
        </div>
      </motion.div>

      <div className="w-full md:w-1/2">
        <motion.h2
          className="text-3xl font-bold mb-4 text-primary"
          variants={itemVariants}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg text-foreground/80 leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div className="mt-6" variants={itemVariants}>
          <button
            type="button"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
