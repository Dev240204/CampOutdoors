import { motion } from 'framer-motion';

const ScrollDownIcon = () => (
  <motion.div
    className="absolute bottom-8 left-[5%] transform -translate-x-1/2 text-white"
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img src="/images/scroll.png" className="h-12" alt="" />
  </motion.div>
);

export default ScrollDownIcon;