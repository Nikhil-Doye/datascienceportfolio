"use client";

import React from "react";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const SkillsMarquee: React.FC<MarqueeProps> = ({
  direction = "left",
  speed = 15,
  pauseOnHover = true,
  className = "",
}) => {
  // Skills data with logos
  const skillsRow1 = [
    { name: "Python", logo: "/logos/python.svg" },
    { name: "SQL", logo: "/logos/sql.svg" },
    { name: "Airflow", logo: "/logos/airflow.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Redshift", logo: "/logos/redshift.svg" },
    { name: "Snowflake", logo: "/logos/snowflake.svg" },
    { name: "Databricks", logo: "/logos/databricks.svg" },
  ];

  const skillsRow2 = [
    { name: "Spark", logo: "/logos/spark.svg" },
    { name: "Hadoop", logo: "/logos/hadoop.svg" },
    { name: "Kafka", logo: "/logos/kafka.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Power BI", logo: "/logos/powerbi.svg" },
    { name: "Tableau", logo: "/logos/tableau.svg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (containerRef.current && !isPaused) {
        const scrollAmount = direction === "left" ? 1 : -1;
        containerRef.current.scrollLeft += scrollAmount;

        // Reset scroll position when reaching the end
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (direction === "left" && scrollLeft >= scrollWidth - clientWidth) {
          containerRef.current.scrollLeft = 0;
        } else if (direction === "right" && scrollLeft <= 0) {
          containerRef.current.scrollLeft = scrollWidth - clientWidth;
        }
      }
    };

    const intervalId = setInterval(animate, speed);
    return () => clearInterval(intervalId);
  }, [direction, speed, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  // Function to duplicate items to ensure continuous scrolling
  const duplicateItems = (items: typeof skillsRow1) => [...items, ...items];
  const row1Items = duplicateItems(skillsRow1);
  const row2Items = duplicateItems(skillsRow2);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Technical Skills
      </h3> */}

      {/* First row */}
      <div
        ref={containerRef}
        className={`flex overflow-x-hidden whitespace-nowrap mb-6 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {row1Items.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
          >
            <div className="w-12 h-12 relative bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md">
              {/* Fallback for missing logos */}
              <div className="w-full h-full flex items-center justify-center text-blue-500 dark:text-blue-400">
                {skill.name.charAt(0)}
              </div>
            </div>
            <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Second row (opposite direction) */}
      <div
        className={`flex overflow-x-hidden whitespace-nowrap mb-6 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex animate-marquee-reverse"
          style={{ animationDuration: `${speed}s` }}
        >
          {row2Items.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
            >
              <div className="w-12 h-12 relative bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md">
                {/* Fallback for missing logos */}
                <div className="w-full h-full flex items-center justify-center text-blue-500 dark:text-blue-400">
                  {skill.name.charAt(0)}
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
