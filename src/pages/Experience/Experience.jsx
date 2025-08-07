import "./experience.css"
import amexLogo from "../../assets/amex.png";
import wegsLogo from "../../assets/wegs.png";
import postcardLogo from "../../assets/postcard.png";
import saguaroLogo from "../../assets/saguaro.png";
import ignitexlLogo from "../../assets/ignitexl.png";
import scuLogo from "../../assets/scu.png";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "American Express",
    logo: amexLogo,
    points: [
      "I built a secure, scalable API that detokenizes cardholder PII for 140M+ users, enabling targeted marketing while protecting sensitive data.",
      "Using robust testing, strict security policies, and streamlined exception management on GCP, the API ensures reliability and safety.",
      "Deployed on Kubernetes with automated monitoring and real-time tracing, it delivers a resilient, responsive data platform for business users."
    ]
  },
  {
    role: "Full-stack Engineer and Data Engineer Intern ",
    company: "WE Global Studios",
    logo: wegsLogo,
    points: [
      "I developed a collaborative React comment feature with voting, role-based access, threaded replies, and persistent state, boosting engagement for 300+ members.",
      "Automated performance reporting with interactive Python visualizations and integrated Hivebrite APIs were other projects of mine that cut manual admin work by 60%."
    ]
  },
  {
    role: "Full-stack Developer Intern",
    company: "The Postcard App",
    logo: postcardLogo,
    points: [ 
      "I designed and implemented in-app messaging for sharing digital postcards using Flutter, boosting engagement for 250+ users and supporting pitch preparation.",
      "I developed Firebase backend features for phone number linking and contacts integration, improving app communication capabilities." 
    ]
  },
  {
    role: "Data Science Intern",
    company: "Saguaro Capital Managment",
    logo: saguaroLogo,
    points: [ 
      "I trained and fine-tuned LLMs such as BERT for intrinsic financial analysis across 100+ public companies, improving classification accuracy by 12% for key equity research tasks.",
      "I implemented model quantization to reduce LLM size by 40%, benchmarked eight baseline models, and integrated roughly 150 meeting audios via speech-to-text pipelines to power a firm-wide research chatbot, saving analysts over three minutes per query."    ]
  },
  {
    role: "AI-Powered Venture Capital Deal Sourcing Extern",
    company: "igniteXL",
    logo: ignitexlLogo,
    points: [ 
      "I evaluated 10 startups and delivering a detailed presentation on one.",
      "I conducted due diligence for a health startup that aligned with the venture firm’s mission."
    ]
  },
  {
    role: "Undergraduate Student Researcher",
    company: "Anastasiu Lab, Santa Clara University",
    logo: scuLogo,
    points: [ 
      "I assisted in building a real-time object detection, tracking, and counting system with CNNs and novel augmentations for the 2024 Nvidia AI City Challenge.",
      "I trained DeepSORT and YOLOv8 models in PyTorch, collaborated on result analysis using S-1 score, and reviewed 40+ research papers."
    ]
  }
  // ...add 4 more positions, following this format
  // {
  //   role: "...",
  //   company: "...",
  //   logo: "...",
  //   points: [ "...", "...", ... ]
  // }
];

export default function Experience() {
  return (
    <div className="page experience-page">
      <h1>Experience</h1>
      <div className="card-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div className="logo-wrapper">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
            </div>
            <div className="card-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <ul className="exp-bullets">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
