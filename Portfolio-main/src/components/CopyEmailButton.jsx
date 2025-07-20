import { motion } from "framer-motion"; // Changed from motion/react to framer-motion

const ReadBlogsButton = () => {
  // Replace with your actual Medium profile URL
  const mediumUrl = "https://medium.com/@unnatisrivastava0603";

  return (
    <motion.a
      href={mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <motion.p
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {/* <img src="" className="w-5" alt="medium icon" /> */}
        Read My Blogs
      </motion.p>
    </motion.a>
  );
};

export default ReadBlogsButton;