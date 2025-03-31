"use client"

import React from 'react';

type TimelineItemProps = {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
  isLast?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  location,
  position,
  period,
  achievements,
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-7 sm:top-8 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 z-10"></div>
      {!isLast && (
        <div className="absolute left-[7px] sm:left-[7px] top-10 h-full w-0.5 bg-blue-200 dark:bg-blue-700"></div>
      )}
      
      {/* Content */}
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{position}</h3>
            <p className="text-md sm:text-lg font-medium text-blue-600 dark:text-blue-400">{company}</p>
          </div>
          <div className="mt-2 sm:mt-0 text-left sm:text-right">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
              {period}
            </span>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{location}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0">•</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Fix-It 24/7 Group LLC",
      location: "Remote",
      position: "Data Engineer Intern",
      period: "July 2024 – December 2024",
      achievements: [
        "Designed and optimized SQL-based ETL pipelines to consolidate customer and service request data, reducing query execution time by 40%.",
        "Developed Power BI dashboards for KPI tracking, replacing manual reporting and saving 30+ hours per week for business teams.",
        "Built an automated scheduling optimization model in Python, improving technician utilization efficiency by 35% and reducing customer wait times.",
        "Implemented data quality validation scripts, reducing data discrepancies by 25% and improving reporting accuracy."
      ]
    },
    {
      company: "Northeastern University",
      location: "Boston, MA",
      position: "Graduate Teaching Assistant (MKTG3501 – Marketing Analytics)",
      period: "September 2024 – December 2024",
      achievements: [
        "Led workshops on SQL-based data transformation and BI reporting, demonstrating real-world marketing data analysis in Power BI and Python.",
        "Developed and presented an Airflow-based automated ETL pipeline project, integrating real-time campaign performance data into a data warehouse.",
        "Provided technical mentorship to 40 students, enhancing their ability to work with SQL queries, Python data pipelines, and visualization tools."
      ]
    },
    {
      company: "LTI-Mindtree",
      location: "India",
      position: "Senior Data Engineer",
      period: "December 2021 – June 2023",
      achievements: [
        "Designed and deployed ETL pipelines using Airflow and Redshift, improving system efficiency by 50% for processing ITSM incident data.",
        "Developed an automated problem classification pipeline in Python, reducing manual ticket triage time by 40% and saving $200K annually in support costs.",
        "Optimized MongoDB queries and migrated workloads to Snowflake, reducing query execution time by 25% and lowering infrastructure costs.",
        "Built an NLP-based incident clustering solution (BERT + HDBSCAN), improving IT problem identification accuracy by 30%."
      ]
    },
    {
      company: "LTI-Mindtree",
      location: "India",
      position: "Software Engineer",
      period: "July 2021 – December 2021",
      achievements: [
        "Developed APIs for an in-house data orchestration tool, improving data pipeline integration for automated problem management workflows.",
        "Implemented ETL automation scripts in Python and SQL, reducing data processing errors by 20% and improving response times.",
        "Created technical documentation and best practices for Airflow DAGs, enhancing maintainability of automated workflows."
      ]
    },
    {
      company: "Tarah Technologies",
      location: "India",
      position: "Machine Learning Intern",
      period: "May 2020 – July 2020",
      achievements: [
        "Created predictive models for image classification using CNN with an F1-score of 0.96, enabling real-time decision-making.",
        "Built a segmentation model for biomedical imaging using advanced techniques, achieving an F1-score of 0.89."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>
        <div className="mt-6 sm:mt-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              company={exp.company}
              location={exp.location}
              position={exp.position}
              period={exp.period}
              achievements={exp.achievements}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
