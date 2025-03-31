"use client"

import React from 'react';
import Image from 'next/image';

type ProjectItemProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  github,
  demo,
}) => {
  return (
    <div className="card mb-6 sm:mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
      
      <div className="mb-3 sm:mb-4">
        <h4 className="text-sm sm:text-md font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-outline flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub Repository
        </a>
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated IT Incident Classification System",
      description: "Developed an NLP-based system that automatically classifies IT service tickets using BERT and HDBSCAN clustering. The system reduced manual ticket triage time by 40% and improved problem identification accuracy by 30%.",
      technologies: ["Python", "BERT", "HDBSCAN", "Airflow", "AWS"],
      github: "https://github.com/nikhildoye/incident-classifier",
      demo: "https://incident-classifier-demo.vercel.app"
    },
    {
      title: "Student Dropout Prediction Model",
      description: "Created a machine learning model using Random Forests to predict student dropout rates. Achieved a Bronze Medal in a Kaggle competition by optimizing model performance through hyperparameter tuning.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Feature Engineering"],
      github: "https://github.com/nikhildoye/dropout-prediction",
      demo: "https://dropout-prediction-demo.vercel.app"
    },
    {
      title: "Real-time Marketing Analytics Dashboard",
      description: "Built an end-to-end data pipeline that processes marketing campaign data in real-time and visualizes KPIs through interactive dashboards. The system integrates data from multiple sources and provides actionable insights for marketing teams.",
      technologies: ["Airflow", "Python", "Kafka", "Power BI", "SQL", "AWS Redshift"],
      github: "https://github.com/nikhildoye/marketing-analytics",
      demo: "https://marketing-analytics-dashboard.vercel.app"
    },
    {
      title: "Cloud-based ETL Pipeline for ITSM Data",
      description: "Designed and implemented a scalable ETL pipeline using AWS services to process and analyze IT Service Management data. The solution improved system efficiency by 50% and reduced infrastructure costs.",
      technologies: ["AWS Glue", "Redshift", "S3", "Python", "SQL", "Airflow"],
      github: "https://github.com/nikhildoye/itsm-etl-pipeline",
      demo: "https://itsm-analytics.vercel.app"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
