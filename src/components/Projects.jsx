import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "AutoML Pipeline for IoT Classification",
    description: "End-to-end AutoML REST API supporting automated classifier selection and hyperparameter tuning across multiple machine-learning algorithms with Flask-based API.",
    tech: ["Python", "Flask", "Scikit-learn", "REST API"],
    category: "Software & AI/ML"
  },
  {
    title: "Redis Search Engine",
    description: "Full-text search engine using BM25 ranking and Porter stemming with ranked query processing inside Redis. REST API, CLI and web interfaces with Docker containerization.",
    tech: ["Python", "Redis", "Flask", "Docker"],
    category: "Software Development"
  },
  {
    title: "Supply Chain & Inventory Analytics",
    description: "Inventory turnover, supplier performance, and operational KPIs analysis. ABC inventory classification, demand forecasting and supplier scorecards.",
    tech: ["Python", "SQL", "Excel", "Power BI"],
    category: "Data Analytics"
  },
  {
    title: "Hyperloop Embedded Control & Data Acquisition",
    description: "Real-time data-acquisition pipelines for multiple sensor streams with synchronized timestamps. IMU, Hall-effect, LiDAR and ultrasonic sensor integration.",
    tech: ["ESP32", "STM32", "Embedded C/C++", "Sensors"],
    category: "Embedded Systems"
  },
  {
    title: "Fisher Safety Network – 5G NTN IoT System",
    description: "IoT safety network using 5G NTN, LoRa mesh, NavIC positioning and LEO satellite relay for maritime communication with offline-first architecture.",
    tech: ["ESP32", "LoRa", "MQTT", "NavIC", "GNSS"],
    category: "Industrial IoT"
  },
  {
    title: "Self-Healing CAN Communication System",
    description: "CAN communication system with automatic fault detection, node isolation and recovery mechanisms. Tested under simulated CAN-bus faults.",
    tech: ["Arduino", "MCP2515", "CAN", "Embedded C/C++"],
    category: "Embedded Systems"
  },
  {
    title: "Conformal Antenna for Structural Health Monitoring",
    description: "Designed and simulated conformal antenna for structural health-monitoring applications with electromagnetic characteristics analysis for wireless sensing.",
    tech: ["RF Engineering", "CST Studio Suite", "EM Simulation"],
    category: "Electronics & RF"
  },
  {
    title: "Antenna Design & Wind-Turbine EMI Analysis",
    description: "Wireless communication antenna design and optimization with S-parameters, return loss, bandwidth analysis and electromagnetic interference study.",
    tech: ["CST Studio Suite", "RF", "Electromagnetics"],
    category: "Electronics & RF"
  },
  {
    title: "Photonic Crystal Fibre Biosensor",
    description: "Designed and simulated photonic crystal fibre biosensor based on refractive-index variation for cancer-detection applications.",
    tech: ["COMSOL Multiphysics", "Photonics", "Biomedical Sensing"],
    category: "Electronics & Engineering"
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
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of software, data science, embedded systems, IoT, and RF engineering projects spanning AI/ML, real-time systems, and hardware integration.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group flex flex-col"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div>
                <div className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2 transition duration-300 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://github.com/R-Priyadarshan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:underline hover:text-teal-700 dark:hover:text-teal-300 mt-auto"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub /> GitHub Profile
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
            <FaGithub size={20} /> Explore More on GitHub <FaExternalLinkAlt size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
