import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section in state
    }
  };

  // Data for the portfolio
  const portfolioData = {
    name: "Soufiane Derouich", // Kept for the hero section
    title: "4th year Data Engineering Student looking for an internship starting in April 2026",
    about: "Engineering student passionate about data analysis in sports. I enjoy uncovering insights from numbers to better understand performance, strategy, and outcomes.",
    contact: {
      phone: "+33 7 71 52 60 31",
      email: "derouichsoufiane1@gmail.com",
      location: "Lille, France"
    },
    skills: {
      programmingLanguages: [
        { name: "Python", icon: "https://placehold.co/40x40/3776AB/FFFFFF?text=PY" },
        { name: "JavaScript", icon: "https://placehold.co/40x40/F7DF1E/000000?text=JS" },
        { name: "Java", icon: "https://placehold.co/40x40/007396/FFFFFF?text=JA" },
        { name: "C/C++/C#", icon: "https://placehold.co/40x40/00599C/FFFFFF?text=C++" },
        { name: "R", icon: "https://placehold.co/40x40/276DC3/FFFFFF?text=R" },
        { name: "SQL", icon: "https://placehold.co/40x40/336791/FFFFFF?text=SQL" },
        { name: "PHP", icon: "https://placehold.co/40x40/777BB4/FFFFFF?text=PHP" },
        { name: "SAS", icon: "https://placehold.co/40x40/000000/FFFFFF?text=SAS" },
      ],
      frameworks: [
        { name: "React.js", icon: "https://placehold.co/40x40/61DAFB/000000?text=RC" },
        { name: "Node.js", icon: "https://placehold.co/40x40/339933/FFFFFF?text=ND" },
        { name: "Bootstrap", icon: "https://placehold.co/40x40/7952B3/FFFFFF?text=BS" },
        { name: "Tailwind CSS", icon: "https://placehold.co/40x40/38B2AC/FFFFFF?text=TW" },
        { name: "Vite", icon: "https://placehold.co/40x40/646CFF/FFFFFF?text=VI" },
      ],
      toolsAndDatabases: [
        { name: "Plotly.js", icon: "https://placehold.co/40x40/2A7EC7/FFFFFF?text=PL" },
        { name: "Firebase", icon: "https://placehold.co/40x40/FFCA28/000000?text=FB" },
        { name: "Lucidchart", icon: "https://placehold.co/40x40/000000/FFFFFF?text=LC" },
        // Added popular data analysis skills
        { name: "Pandas", icon: "https://placehold.co/40x40/150458/FFFFFF?text=PD" },
        { name: "NumPy", icon: "https://placehold.co/40x40/013243/FFFFFF?text=NP" },
        { name: "Scikit-learn", icon: "https://placehold.co/40x40/F7931E/000000?text=SKL" },
        { name: "Matplotlib", icon: "https://placehold.co/40x40/11557C/FFFFFF?text=MPL" },
        { name: "Seaborn", icon: "https://placehold.co/40x40/5283CC/FFFFFF?text=SB" },
        { name: "Jupyter", icon: "https://placehold.co/40x40/F37626/FFFFFF?text=JP" },
        { name: "Tableau", icon: "https://placehold.co/40x40/E16C20/FFFFFF?text=TB" },
        { name: "Power BI", icon: "https://placehold.co/40x40/F2C811/000000?text=PBI" },
      ],
      languages: [
        { name: "English", level: "C1" },
        { name: "French", level: "C2" },
        { name: "German", level: "A2" },
      ]
    },
    projects: [
      {
        title: "Interactive visualisation of french educational inequalities",
        description: "This project focuses on designing an interactive web dashboard to explore social inequalities in French schools via the social position index of institutions. Key features include: Exploration, processing, and visualization of real data from public CSV files (MENJ). Creation of a dynamic dashboard with multi-indicator visualizations. Interactive visualizations (bar charts, heatmaps, maps) created with Plotly.js. Full front-end development using HTML, CSS, JavaScript, and Bootstrap. Integration of an indicator selection engine and filters (by city, department, sector).",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Plotly.js"],
        image: "public/images/dash.webp", // Specific image for dashboard
        headerColor: "bg-blue-700" // Example color for header
      },
      {
        title: "Zombicide Game",
        description: "This Java project involves modeling and developing a defense game against zombie attacks. Inspired by the game Zombicide, it features simplified mechanics to offer a unique experience: Dynamic construction of a city made up of streets and buildings. Separate game phases for survivors and zombies, each with specific rules. Various actions for survivors, such as attacking, searching, or using equipment. Different types of zombies with unique characteristics and behaviors. The project is designed to be extensible, allowing easy addition of new features.",
        technologies: ["Java", "Lucidchart", "OOP", "UML", "Algorithms"],
        image: "/public/images/zmbicon.png", // Specific image for zombie game
        headerColor: "bg-red-700" // Example color for header
      },
      {
        title: "Atlético Madrid Players Analysis",
        description: "This comprehensive data analysis project focuses on Atlético Madrid players. It involves a multi-faceted approach to understanding player performance and team strategy: Collection, cleaning, and analysis of player statistics, performance metrics, and tactical data. Development of an interactive dashboard for presenting key insights. Utilization of various visualization techniques to highlight trends, player strengths, and areas for improvement. This project demonstrates strong skills in data processing, statistical analysis, and dashboard creation.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Tableau", "Power BI"
        ],
        image: "public/images/ftban.jpg", // Specific image for football analytics
        headerColor: "bg-indigo-700" // Example color for header
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter antialiased">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-95 z-50 shadow-2xl border-b-2 border-blue-600">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-blue-400 tracking-wider">Portfolio<span className="text-blue-600">_</span></div>
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg font-medium text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-400 ${activeSection === 'home' ? 'border-blue-400 text-white' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-lg font-medium text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-400 ${activeSection === 'projects' ? 'border-blue-400 text-white' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-lg font-medium text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-400 ${activeSection === 'skills' ? 'border-blue-400 text-white' : ''}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-lg font-medium text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-400 ${activeSection === 'contact' ? 'border-blue-400 text-white' : ''}`}
            >
              Contact
            </button>
          </div>
          {/* Mobile Menu Button (Hamburger) - Not fully implemented for functionality */}
          <div className="md:hidden">
            <button onClick={() => alert('Mobile menu toggle not implemented yet!')} className="text-gray-300 focus:outline-none p-2 rounded-md hover:bg-gray-700">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero/Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 left-0"></div>
          <div className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 right-0"></div>
          <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-0 left-0"></div>
          <div className="absolute w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 bottom-0 right-0"></div>
        </div>

        <div className="relative z-10 p-10 rounded-lg shadow-2xl bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm max-w-3xl mx-auto border-2 border-blue-600 transform hover:scale-[1.02] transition-transform duration-300">
          {/* Profile Image - Placeholder for now */}
          <img
            src="https://placehold.co/180x180/61DAFB/000000?text=SD" // Slightly larger placeholder
            alt="Soufiane Derouich"
            className="rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-lg transform transition duration-500 hover:scale-105"
          />
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            {portfolioData.name}
          </h1>
          <p className="text-3xl text-blue-300 mb-8 font-light italic">
            {portfolioData.title}
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
            {portfolioData.about}
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* Projects Section - Now before Skills */}
      <section id="projects" className="py-24 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-16">My Projects<span className="text-blue-400">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-300 ease-in-out hover:scale-102 hover:shadow-3xl border border-blue-700 flex flex-col">
                {/* Project Image */}
                <div className={`relative h-48 flex items-center justify-center p-4 overflow-hidden`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                {/* Project Title - Moved below the image */}
                <div className="p-8 flex-grow">
                  <h3 className="text-3xl font-bold text-blue-400 mb-4 leading-tight">{project.title}</h3> {/* Added font-bold */}
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full shadow-inner border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Removed Code Source and Demo buttons */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Now after Projects */}
      <section id="skills" className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-16">My Skills<span className="text-blue-400">.</span></h2>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-4xl font-semibold text-blue-400 mb-10 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {portfolioData.skills.programmingLanguages.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-3 border border-blue-700">
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 rounded-full border-3 border-blue-300 object-cover" />
                  <span className="text-xl font-medium text-gray-200 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-16">
            <h3 className="text-4xl font-semibold text-blue-400 mb-10 text-center">Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {portfolioData.skills.frameworks.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-3 border border-blue-700">
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 rounded-full border-3 border-blue-300 object-cover" />
                  <span className="text-xl font-medium text-gray-200 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Databases */}
          <div className="mb-16">
            <h3 className="text-4xl font-semibold text-blue-400 mb-10 text-center">Tools & Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {portfolioData.skills.toolsAndDatabases.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-3 border border-blue-700">
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 rounded-full border-3 border-blue-300 object-cover" />
                  <span className="text-xl font-medium text-gray-200 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-4xl font-semibold text-blue-400 mb-10 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {portfolioData.skills.languages.map((lang, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-3 border border-blue-700">
                  <span className="text-xl font-medium text-gray-200">{lang.name}</span>
                  <span className="text-md text-gray-400">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-16">Get in Touch<span className="text-blue-400">.</span></h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-12"> {/* Use items-stretch for equal height cards */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-xl flex flex-col items-center justify-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-blue-700">
              <div className="text-blue-400 text-6xl mb-6">📞</div> {/* Larger icons */}
              <h3 className="text-2xl font-semibold text-white mb-3">Call Me</h3>
              <p className="text-gray-300 text-xl font-light">{portfolioData.contact.phone}</p>
            </div>
            <div className="bg-gray-800 p-10 rounded-lg shadow-xl flex flex-col items-center justify-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-blue-700">
              <div className="text-blue-400 text-6xl mb-6">📧</div> {/* Larger icons */}
              <h3 className="text-2xl font-semibold text-white mb-3">Email Me</h3>
              <p className="text-gray-300 text-xl font-light">{portfolioData.contact.email}</p>
            </div>
            <div className="bg-gray-800 p-10 rounded-lg shadow-xl flex flex-col items-center justify-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-blue-700">
              <div className="text-blue-400 text-6xl mb-6">📍</div> {/* Larger icons */}
              <h3 className="text-2xl font-semibold text-white mb-3">Location</h3>
              <p className="text-gray-300 text-xl font-light">{portfolioData.contact.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Soufiane Derouich. All rights reserved.</p>
      </footer>

      {/* Tailwind CSS keyframes for blob animation */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default App;
