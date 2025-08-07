import React, { useState } from "react";
import "./Experience/experience.css";
import GithubLogo from '../assets/github.svg?react';
import caffiendLogo from "../assets/caffiend.png";
import factcheckrLogo from "../assets/factcheckr.png";
import matchingLogo from "../assets/matching.png";
import ewiLogo from "../assets/ewi.png";


const projects = [
  {
    name: "cafFIEND",
    logo: caffiendLogo,
    bullets: [
      "cafFIEND is a minimalistic MERN stack website for coffee enthusiasts to discover, review, and share experiences about local coffee shops. It fosters a community-driven platform where users can explore curated cafes, write reviews, and find key information to help them choose the perfect coffee spot."
    ],
    link: "https://github.com/impana-c/cafFIEND",
    skills: ["React", "Node.js", "MongoDB", "MERN"]
  },
  {
    name: "FactCheckr",
    logo: factcheckrLogo,
    bullets: [
      "FactCheckr is a Chrome extension that lets users fact-check highlighted text on news articles by opening a side panel with evidence summaries and confidence scores from trusted sources. It provides an overall rating indicating how strongly the gathered evidence supports or contradicts the claim, along with a transparency page explaining the entire evaluation process."
    ],
    link: "https://github.com/megang33/news-extension",
    skills: ["React", "Node.js", "NLP", "Huggingface"]
  },
  {
    name: "Evening with Industry and Mentorship Matching Algorithms",
    logo: matchingLogo,
    bullets: [
      "I developed Gale-Shapley stable matching algorithms in Python to optimize student-to-new admit mentorship pairings and company representative-to-student matchings for SWE@UCLA, ensuring fair and stable assignments."
    ],
    link: "https://github.com/swe-ucla",
    skills: ["Python", "Pandas", "Numpy"]
  },
  {
    name: "Evening with Industry Website",
    logo: ewiLogo,
    bullets: [
      "Evening with Industry (EWI) is one of UCLA’s largest student-run networking events, connecting around 40 companies with 300 students annually through networking, dinner, and a private career fair. I also helped organize EWI and led 10 professional development workshops, including AWS’s YouthTech bootcamp, fostering career growth and industry engagement."
    ],
    link: "https://sweucla-ewi.vercel.app/",
    skills: ["React", "Figma"]
  },
];

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for(let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function Projects() {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <div className="card-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="card">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="logo-link"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="logo-wrapper">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="company-logo"
          />
        </div>
      </a>

      <div className="card-content">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
          <h3 style={{ margin: 0 }}>{project.name}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="github-button"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <GithubLogo style={{ width: "22px", height: "22px" }} />
          </a>
        </div>

        <p className="project-description">
          {project.bullets.map((bullet, idx) => (
            <React.Fragment key={idx}>
              {bullet}
              {project.name === "Evening with Industry and Mentorship Matching Algorithms" && idx === project.bullets.length - 1 && (
                <span style={{ display: "block", height: "25px" }} />
              )}
            </React.Fragment>
          ))}
        </p>


        {project.skills && project.skills.length > 0 && (
          <div style={{ marginTop: "0.75em" }}>
            <button
              className="skills-dropdown-btn"
              onClick={() => setShowSkills(v => !v)}
              aria-expanded={showSkills}
              aria-controls={`skills-list-${project.name.replace(/\s+/g, "-")}`}
            >
              {showSkills ? "⤴ Hide Skills" : "⤵ Show Skills"}
            </button>
            {showSkills && (
              <div
                className="skills-columns"
                id={`skills-list-${project.name.replace(/\s+/g, "-")}`}
                style={{ marginTop: "0.75em" }}
              >
                {chunkArray(project.skills, 2).map((chunk, index) => (
                  <ul key={index} className="skills-list-column">
                    {chunk.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
