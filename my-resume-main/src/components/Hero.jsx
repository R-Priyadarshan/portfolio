import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-teal-200 dark:bg-teal-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20 transition-colors duration-300"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 0, 50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 dark:bg-emerald-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20 transition-colors duration-300"
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-teal-600 dark:text-teal-400">
            R Priyadarshan
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300">
            Aspiring Software Developer & Data Scientist. Passionate about building intelligent solutions that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
