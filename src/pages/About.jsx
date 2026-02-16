import React from 'react';
import { AlertTriangle, Code, Database, Cpu, Shield, Zap, FileText, Users, Clock, Heart } from 'lucide-react';
import image from '../assets/Me.jpg'

const About = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Fast Search",
      description: "Quickly find medicines for your symptoms with our intuitive search system."
    },
    {
      icon: <FileText className="h-6 w-6 text-green-500" />,
      title: "Medicine Details",
      description: "Get comprehensive information about dosage, side effects, and precautions."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Doctor Recommendation",
      description: "Always consult with healthcare professionals for proper medical advice."
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-500" />,
      title: "Safety Information",
      description: "Access important safety alerts, contraindications, and drug interaction warnings."
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Dosage Reminders",
      description: "Set personalized medication schedules and receive timely reminders for your doses."
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Health Tracking",
      description: "Monitor your symptoms and treatment progress to share with your healthcare provider."
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      items: ["React.js 19", "Tailwind CSS", "Lucide React Icons"]
    },
    {
      category: "Routing",
      items: ["React Router DOM"]
    },
    {
      category: "API & Data",
      items: ["Axios", "Fuse.js", "RxNorm API", "OpenFDA Drug API"]
    },
    {
      category: "Build Tools",
      items: ["Vite", "PostCSS", "Autoprefixer"]
    }
  ];

  const author = {
    name: "Rakesh Kr. Dey",
    role: "MERN Stack Developer & UI/UX Designer",
    bio: "Passionate about creating accessible healthcare solutions through technology. With 3+ years of experience in web development and a focus on user-friendly design.",
    avatar: image,
    skills: ["React", "Javascript", "python", "Java", "C++", "Node.js", "UI/UX Design", "API", "DSA"],
    social: {
      github: "https://github.com/Rakesh-Dey-013",
      linkedin: "https://www.linkedin.com/in/rakeshdey007/",
      twitter: "https://x.com/RD_Gaming796974?t=KjHhp857TH3bu5ze5qKNGA&s=09"
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">About MediSuggest</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Purpose Section */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Purpose</h2>
            <p className="text-zinc-400 mb-4">
              MediSuggest is designed to help users find information about medicines and get suggestions for common health problems. 
              Our goal is to provide accessible medical information to help users make informed decisions about their health.
            </p>
            <p className="text-zinc-400">
              However, it's crucial to understand that this platform is for informational purposes only and should not replace 
              professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          
          {/* How It Works Section */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">How It Works</h2>
            <p className="text-zinc-400 mb-4">
              Our system uses reliable data sources including the RxNorm API from the U.S. National Library of Medicine 
              and the OpenFDA Drug API to provide accurate information about medications.
            </p>
            <p className="text-zinc-400">
              If API services are unavailable, we fall back to our carefully curated local database of common medicines 
              and their details.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="card mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-zinc-700/30 rounded-lg border border-zinc-700">
                <div className="mb-3 p-2 bg-zinc-800 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="card mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  {tech.category === "Frontend" && <Code className="h-5 w-5 text-blue-400 mr-2" />}
                  {tech.category === "Routing" && <Cpu className="h-5 w-5 text-green-400 mr-2" />}
                  {tech.category === "API & Data" && <Database className="h-5 w-5 text-purple-400 mr-2" />}
                  {tech.category === "Build Tools" && <Shield className="h-5 w-5 text-yellow-400 mr-2" />}
                  <h3 className="text-lg font-medium text-white">{tech.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-zinc-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-zinc-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Author Profile */}
        <div className="card mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">About the Developer</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-white">{author.name}</h3>
              <p className="text-blue-400 mb-3">{author.role}</p>
              <p className="text-zinc-400 mb-4">{author.bio}</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium text-white mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {author.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Connect</h4>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href={author.social.github} className="text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href={author.social.linkedin} className="text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.25h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.71z" />
                    </svg>
                  </a>
                  <a href={author.social.twitter} className="text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="card bg-red-900/20 border-red-800/50">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Important Disclaimer</h2>
              <p className="text-zinc-300 mb-2">
                MediSuggest is not a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition.
              </p>
              <p className="text-zinc-300">
                Never disregard professional medical advice or delay in seeking it because of something you 
                have read on this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;