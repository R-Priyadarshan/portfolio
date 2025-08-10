import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Disease Prediction using Ensemble Models",
    description: "Predicts heart and Parkinson's diseases using ensemble learning techniques combining multiple ML models.",
    github: "https://github.com/balaji-29-s/disease-prediction-using-ensemble-models-heart-and-parkinsons-",
  },
  {
    title: "Project Quiz",
    description: "A TypeScript-based interactive quiz web app designed to test and enhance knowledge retention.",
    github: "https://github.com/R-Priyadarshan/ai-quiz.git",
  },
  {
    title: "GUI translator",
    description: "A custom GUI translator which gives a audio as well as text output",
    github: "https://github.com/R-Priyadarshan/tanslator.git",
  },
  {
    title: "AutoML Pipeline for IoT Classification",
    description: "Generates a synthetic IoT dataset and runs TPOT to search for a strong classification pipeline.",
    github: "https://github.com/R-Priyadarshan/autoML-pipeline.git",
  },
  {
    title: "IoT Time-Series Forecasting ",
    description: "AGenerates synthetic hourly temperature & energy time-series and trains an LSTM to forecast the next 24 hours..",
    github: "https://github.com/R-Priyadarshan/time-series-forcasting.git",
  },
  {
    title: "AI Interviewer",
    description: "Simulates AI-based interview practice scenarios using JavaScript and smart evaluation logic.",
    github: "https://github.com/R-Priyadarshan/AI-interview.git",
  },
  {
    title: "IoT Device Data Anomaly Detection",
    description: "Simulates IoT devices posting sensor readings to a simple Flask server. Trains an Isolation Forest to detect anomalies and produces a scatter plot of anomalies..",
    github: "https://github.com/R-Priyadarshan/data-anamoly-detection.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            My Project Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Dive into a collection of cutting-edge AI, ML, and IOT applications I've built with passion and precision.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-[1.02] hover:shadow-teal-400/40 transition-all duration-300 group"
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2 transition duration-300 group-hover:underline">
                {project.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
                {project.description}
              </p>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:underline hover:text-teal-700 dark:hover:text-teal-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub /> GitHub Repo
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/R-Priyadarshan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} /> Explore More Projects <FaExternalLinkAlt size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
