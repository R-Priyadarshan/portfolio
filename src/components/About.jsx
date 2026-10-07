import { motion } from 'framer-motion';
import { FaBriefcase, FaDownload, FaGraduationCap } from 'react-icons/fa';
import resumePdf from '../media/priyadarshan (1).pdf';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            About Me
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Electronics & Computer Engineering undergraduate with hands-on experience in Python, C/C++, embedded systems, and data science. Passionate about solving real-world problems through software development, data analytics, and AI/ML solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-3xl text-teal-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Internships</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Test Engineer & Data Analyst</h4>
                <p className="text-teal-400">NCR Atleos, Chennai</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2026</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  <li>Hardware testing and failure-mode analysis</li>
                  <li>Power BI dashboards for assets & metrics</li>
                  <li>Automated data preparation & reporting</li>
                </ul>
              </div>

              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Telemetry Engineering Intern</h4>
                <p className="text-teal-400">Nokia</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2026</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  <li>Real-time network telemetry data modeling</li>
                  <li>YANG Push Lite streaming pipelines</li>
                  <li>Python scripting & Git workflows</li>
                </ul>
              </div>

              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Engineering Intern</h4>
                <p className="text-teal-400">CEM, Chennai</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2025</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  <li>ATV autonomous-navigation system using ROS & Gazebo</li>
                  <li>SLAM-based obstacle avoidance</li>
                  <li>Hardware-software integration</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-emerald-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">B.Tech Electronics & Computer Engineering</h4>
                <p className="text-emerald-400">SRM Institute of Science and Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Expected 2027 | CGPA: 8.4/10</p>
              </div>

              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">B.Sc Data Science</h4>
                <p className="text-emerald-400">Indian Institute of Technology Madras</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">In Progress | CGPA: 7.6/10</p>
              </div>

              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">12th Grade (CBSE)</h4>
                <p className="text-emerald-400">Narayana Co Kaveri Bhavan</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2023 | 78.5%</p>
              </div>

              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">10th Grade (CBSE)</h4>
                <p className="text-emerald-400">DAV Public School, Safilguda</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2021 | 89.8%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-gray-600 dark:text-gray-300">
              • AWS Certified Cloud Practitioner
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              • IIT Madras Data Science Certification
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              • Machine Learning – Microsoft/Kaggle
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              • AI/ML Workshop – IIT Hyderabad
            </div>
          </div>
        </motion.div>

        {/* Download Resume */}
        <div className="flex justify-center mt-12">
          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaDownload className="mr-2" /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
