import { motion } from "framer-motion";

export const ContactUsHeroSection = () => {
  return (
    <div className="relative  text-center overflow-hidden  pb-6">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
      <div className="container flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact our friendly team
        </motion.h1>
        <motion.p
          className="mt-4 max-w-[700px] text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let us know how we can help. We're here to answer your questions and
          provide solutions.
        </motion.p>
      </div>
    </div>
  );
};
