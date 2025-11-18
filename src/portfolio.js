import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Award, Briefcase, ChevronRight } from 'lucide-react';
import cathy from './cathy.png'
import resume from './Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  
  const projects = [
    {
      title: "E-commerce Website Frontend",
      description: "Developed a responsive frontend interface for an e-commerce platform",
      tech: ["React", "CSS", "Bootstrap"],
      type: "Project"
    },
    {
      title: "Sports Project",
      description: "Contributed to frontend development during internship phase",
      tech: ["React", "Tailwind CSS"],
      type: "Project"
    },
    {
      title: "Vegan snacks Application",
      description: "Interactive calculator with modern design",
      tech: ["Springboot", "React", "JavaScript","Java"],
      type: "Project"
    }
    
  ];

  const internships = [
    {
      company: "Codsoft",
      role: "Web Development Intern",
      duration: "2023",
      description: "Worked on frontend development and UI/UX design for various projects",
      highlights: [
        "Contributed to frontend development",
        "Learned modern web technologies",
        "Collaborated with team members"
      ]
    },
    {
      company: "Infosys Springboard",
      role: "Development Intern",
      duration: "2023",
      description: "Gained hands-on experience with enterprise-level development practices",
      highlights: [
        "Worked with industry standards",
        "Developed full-stack applications",
        "Participated in code reviews"
      ]
    },
    {
      company: "Amazon",
      role: "Software Development Intern",
      duration: "2025",
      description: "prioritizing deep understanding, clean code, collaboration, industry level experience on real time project ",
      highlights: [
        "Worked on real-time project",
        "Gained industry experience",
        "impact of every line of code"
      ]
    }
  ];

  const certifications = [
    {
      name: "SB_TechA _Linux Programming Certification",
      issuer: "Infosys Springboard",
      date: "Oct 2, 2024",
      credentialLink: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certification"
    },
    {
      name: "Associate in IT Foundation Skills (Java)",
      issuer: "Infosys Springboard",
      date: "Sep 6, 2024",
      credentialLink: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certification"
    },
    {
      name: "Java Foundation Certification",
      issuer: "Infosys Springboard",
      date: "Aug 10, 2024",
      credentialLink: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certification"
    },
    {
      name: "React Web Developer Certification",
      issuer: "Infosys Springboard",
      date: "Aug 17, 2024",
      credentialLink: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certification"
    },
    {
      name: "Design Thinking - A primer",
      issuer: "NPTEL",
      date: "Aug , 2024",
      credentialLink: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certification"
    }
    
  ];

  const skills = [
    "HTML/CSS", "React", "Java", "C++", "UI/UX Design","Springboot", "Responsive Design", 
    "Frontend Development", "Full Stack Development"
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // Replace with the actual path to your PDF file
    link.download = "My_Resume.pdf"; // Replace with your desired file name
    link.click();
  };


  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-violet-50 via-white to-indigo-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDark ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} shadow-lg z-50`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Catherine Davidson</h1>
          <div className="flex items-center gap-4 text-xl">
            <a href="#about" className={`hover:${isDark ? 'text-blue-500' : 'text-violet-600'} transition-colors`}>About</a>
            <a href="#projects" className={`hover:${isDark ? 'text-blue-500' : 'text-violet-600'} transition-colors`}>Projects</a>
            <a href="#internships" className={`hover:${isDark ? 'text-blue-500' : 'text-violet-600'} transition-colors`}>Internships</a>
            <a href="#certifications" className={`hover:${isDark ? 'text-blue-500' : 'text-violet-600'} transition-colors`}>Certifications</a>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-4 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-100 hover:bg-violet-200'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6 relative">
  <div className="container mx-auto text-center md:text-left">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold mb-7">
        Full Stack Developer
      </h1>
      <h1 className="text-4xl md:text-5xl font-italic mb-6">
        Catherine Davidson A
      </h1>
      <p className="text-xl md:text-2xl opacity-80 mb-8">
        Building the web, one component at a time
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <a href="#contact" className={`px-6 py-3 rounded-full ${
          isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-violet-600 hover:bg-violet-700'
        } text-white transition-colors`}>
          Get in Touch
        </a>
        <a href="#projects" className={`px-6 py-3 rounded-full ${
          isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-violet-100 hover:bg-violet-200 '
        } transition-colors`}>
          View Projects
        </a>
      </div>
      <button onClick={handleDownload} className =" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Download Resume &nbsp;
<FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
</span>
</button>
        
    </div>
  </div>

  {/* Image in the right corner */}
  <div className="absolute top-12 pb-5 right-0 md:w-1/3 mt-8 mr-6">
    <img
      src={cathy}  // Replace with your image path
      alt="Full Stack Developer"
    />
  </div>
</section>



      {/* About Section */}
      <section id="about" className={`py-20 ${
        isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-violet-100 to-indigo-100'
      }`}>
        <div className="container mx-auto px-6">
  <div className="grid grid-cols-7 gap-12">
    {/* About Me Section (Spans 3 out of 5 columns) */}
    <div className="col-span-4">
      <p className="text-lg mb-4">
  <h2 className="text-4xl pt-0 mt-0 font-semibold mb-4">About Me</h2>
        I'm currently pursuing my Bachelor's degree in Computer Science Engineering
        at SKCET Coimbatore, set to graduate in 2027. As a second-year student,
        I'm passionate about web development and creating intuitive user experiences.
      </p>
      <p className="text-lg">
        Through my internships at Codsoft and Infosys Springboard, I've gained
        practical experience in frontend development and modern web technologies.
      </p>
    </div>

    {/* Vertical Line Separator (Center) */}
    <div className="hidden md:block border-l-2 border-gray-300 h-full"></div>

    {/* Skills Section (Spans 2 out of 5 columns) */}
    <div className="col-span-2">
      <h2 className="text-4xl pt-0 mt-0 font-semibold mb-4 ">Skills</h2>
      <div className="flex flex-wrap gap-3 ">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-4 py-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-violet-200/70'} text-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-violet-50 shadow-lg hover:shadow-violet-200'
                } transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Code size={20} className={isDark ? 'text-blue-500' : 'text-violet-500'} />
                </div>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs ${
                        isDark ? 'bg-gray-700' : 'bg-violet-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className={`py-20 ${
        isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-violet-100 to-indigo-100'
      }`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Internship Experience</h2>
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-white shadow-lg hover:shadow-violet-200'
                } transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{internship.company}</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {internship.role} | {internship.duration}
                    </p>
                  </div>
                  <Briefcase size={24} className={isDark ? 'text-blue-500' : 'text-violet-500'} />
                </div>
                <p className="mb-4">{internship.description}</p>
                <ul className="space-y-2">
                  {internship.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ChevronRight size={16} className={isDark ? 'text-blue-500' : 'text-violet-500'} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-violet-50 shadow-lg hover:shadow-violet-200'
                } transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {cert.issuer}
                    </p>
                  </div>
                  <Award size={24} className={isDark ? 'text-blue-500' : 'text-violet-500'} />
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Issued {cert.date}
                </p>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 mt-4 ${
                    isDark ? 'text-blue-500 hover:text-blue-400' : 'text-violet-600 hover:text-violet-500'
                  }`}
                >
                  View Credential
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-violet-100 to-indigo-100'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/CatherineDavidson" target="_blank" rel="noopener noreferrer"
              className={`p-4 rounded-full ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-200 hover:bg-violet-300'
              } transition-colors`}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/catherine-davidson-a-63b4a6290/" target="_blank" rel="noopener noreferrer"
              className={`p-4 rounded-full ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-200 hover:bg-violet-300'
              } transition-colors`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:catherinedavidsona@gmail.com"
              className={`p-4 rounded-full ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-200 hover:bg-violet-300'
              } transition-colors`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 ${isDark ? 'bg-gray-800' : 'bg-violet-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Catherine Davidson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
