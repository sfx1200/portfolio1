import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // State for email input and validation error message
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section in state
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailInput(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Data for the portfolio (same as before)
  const portfolioData = {
    name: "Soufiane Derouich",
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
        image: "images/dash.webp",
        headerColor: "bg-blue-700"
      },
      {
        title: "Zombicide Game",
        description: "This Java project involves modeling and developing a defense game against zombie attacks. Inspired by the game Zombicide, it features simplified mechanics to offer a unique experience: Dynamic construction of a city made up of streets and buildings. Separate game phases for survivors and zombies, each with specific rules. Various actions for survivors, such as attacking, searching, or using equipment. Different types of zombies with unique characteristics and behaviors. The project is designed to be extensible, allowing easy addition of new features.",
        technologies: ["Java", "Lucidchart", "OOP", "UML", "Algorithms"],
        image: "images/zmbicon.png",
        headerColor: "bg-red-700"
      },
      {
        title: "Atlético Madrid Players Analysis",
        description: "This comprehensive data analysis project focuses on Atlético Madrid players. It involves a multi-faceted approach to understanding player performance and team strategy: Collection, cleaning, and analysis of player statistics, performance metrics, and tactical data. Development of an interactive dashboard for presenting key insights. Utilization of various visualization techniques to highlight trends, player strengths, and areas for improvement. This project demonstrates strong skills in data processing, statistical analysis, and dashboard creation.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Tableau", "Power BI"],
        image: "images/ftban.jpg",
        headerColor: "bg-indigo-700"
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
          <div className="hidden md:flex space-x-8 text-lg font-semibold">
            {["home", "about", "projects", "skills", "contact"].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-500">{portfolioData.name}</h1>
        <h2 className="text-2xl mb-4">{portfolioData.title}</h2>
        <p className="text-lg max-w-3xl">{portfolioData.about}</p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2">About Me</h3>
        <p className="text-lg leading-relaxed">{portfolioData.about}</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2">Projects</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.projects.map(({title, description, technologies, image, headerColor}, index) => (
            <div key={index} className="rounded-xl shadow-lg overflow-hidden bg-gray-900 border border-gray-700">
              <div className={`${headerColor} px-6 py-4`}>
                <h4 className="text-xl font-semibold text-gray-100">{title}</h4>
              </div>
              <img src={image} alt={title} className="object-cover h-48 w-full" />
              <div className="p-6">
                <p className="mb-4 text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-600 px-3 py-1 rounded text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2">Skills</h3>
        
        {/* Programming Languages */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold mb-4">Programming Languages</h4>
          <div className="flex flex-wrap gap-6">
            {portfolioData.skills.programmingLanguages.map(({name, icon}, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <img src={icon} alt={name} width={40} height={40} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold mb-4">Frameworks and Libraries</h4>
          <div className="flex flex-wrap gap-6">
            {portfolioData.skills.frameworks.map(({name, icon}, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <img src={icon} alt={name} width={40} height={40} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Databases */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold mb-4">Tools & Databases</h4>
          <div className="flex flex-wrap gap-6">
            {portfolioData.skills.toolsAndDatabases.map(({name, icon}, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <img src={icon} alt={name} width={40} height={40} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Languages</h4>
          <ul className="list-disc pl-5">
            {portfolioData.skills.languages.map(({name, level}, idx) => (
              <li key={idx}>{name} — Level {level}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block pb-2">Contact</h3>
        <p className="mb-4">Phone: {portfolioData.contact.phone}</p>
        <p className="mb-8">Location: {portfolioData.contact.location}</p>

        {/* Contact Form */}
        <form
          className="max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            if (!emailError && emailInput) {
              alert(`Thank you for contacting me! I will reply soon to ${emailInput}`);
              setEmailInput('');
            }
          }}
        >
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={emailInput}
            onChange={handleEmailChange}
            placeholder="your.email@example.com"
            className={`w-full p-3 rounded border ${
              emailError ? 'border-red-500' : 'border-gray-300'
            } text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            required
          />
          {emailError && <p className="text-red-500 mt-1 text-sm">{emailError}</p>}

          <button
            type="submit"
            disabled={!!emailError || !emailInput}
            className={`mt-4 px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed`}
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
