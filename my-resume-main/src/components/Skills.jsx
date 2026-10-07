import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaTools, FaMicrochip, FaWaveSquare } from 'react-icons/fa';

const skillCategories = [
  {
    category: "Programming",
    icon: <FaCode className="text-5xl text-teal-400" />,
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "Bash"]
  },
  {
    category: "Software Development",
    icon: <FaBrain className="text-5xl text-emerald-400" />,
    skills: [
      "REST APIs", "Flask", "FastAPI", "Backend Development", 
      "API Integration", "Git", "GitHub", "Docker", "Linux"
    ]
  },
  {
    category: "Data & AI/ML",
    icon: <FaBrain className="text-5xl text-blue-400" />,
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Power BI", "Data Validation",
      "Scikit-learn", "TensorFlow", "Keras", "LSTM", "Feature Engineering",
      "Generative AI", "LLM Tools"
    ]
  },
  {
    category: "Embedded Systems",
    icon: <FaMicrochip className="text-5xl text-purple-400" />,
    skills: [
      "STM32", "ESP32", "Arduino", "Raspberry Pi", "MCP2515",
      "Embedded C/C++", "Embedded Firmware", "Sensor Integration", "Real-Time Systems"
    ]
  },
  {
    category: "Communication Protocols",
    icon: <FaWaveSquare className="text-5xl text-indigo-400" />,
    skills: [
      "CAN", "SPI", "I2C", "UART", "MQTT", "GNSS", 
      "5G NTN", "Network Telemetry", "YANG", "YANG Push Lite"
    ]
  },
  {
    category: "Industrial IoT & Electronics",
    icon: <FaTools className="text-5xl text-teal-400" />,
    skills: [
      "IoT Systems", "Machine Data Acquisition", "Sensor Networks",
      "Real-Time Monitoring", "Edge Computing", "Antenna Design",
      "RF Analysis", "Electromagnetic Simulation", "S-Parameters"
    ]
  },
  {
    category: "Engineering Tools",
    icon: <FaTools className="text-5xl text-orange-400" />,
    skills: [
      "MATLAB", "CST Studio Suite", "COMSOL Multiphysics", 
      "ROS", "Gazebo", "Proteus", "STM32CubeIDE", "Power BI"
    ]
  },
  {
    category: "Project Management",
    icon: <FaBrain className="text-5xl text-pink-400" />,
    skills: [
      "Agile", "Scrum", "Sprint Planning", "Task Tracking", 
      "Technical Documentation", "Cross-functional Collaboration"
    ]
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive expertise spanning software development, embedded systems, data science, AI/ML, Industrial IoT, and engineering simulation tools.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl transition-colors duration-300 hover:shadow-2xl"
              variants={item}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(20, 184, 166, 0.2)",
                        color: "#14b8a6" 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
