"use client"

import React from 'react';
import SkillsMarquee from '@/components/SkillsMarquee';

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="card mb-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Engineering & Workflow Automation",
      skills: ["ETL Pipelines", "Data Modeling", "Airflow", "Batch & Real-Time Processing"]
    },
    {
      title: "Big Data & Cloud Technologies",
      skills: ["AWS Glue", "Redshift", "Snowflake", "Databricks", "Apache Spark", "Hadoop", "Kafka"]
    },
    {
      title: "Programming & Query Optimization",
      skills: ["Python", "SQL", "Scala", "PL/SQL", "HiveQL", "SparkSQL"]
    },
    {
      title: "Database & Data Distribution",
      skills: ["PostgreSQL", "NoSQL", "MongoDB", "DynamoDB", "Real-Time Data Processing"]
    },
    {
      title: "Business Intelligence & Reporting",
      skills: ["Power BI", "Tableau", "Automated Dashboards", "Financial Data Analytics"]
    },
    {
      title: "Certifications",
      skills: ["AWS Machine Learning Engineer - Associate (Ongoing)"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Add the marquee component here */}
        <SkillsMarquee />
        
        {/* Existing skills categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;