import './about.css';
import GithubLogo from '../../assets/github.svg?react';
import LinkedinLogo from '../../assets/linkedin.svg?react';
import profilePic from '../../assets/profile.JPEG';
import { MdEmail, MdEditNote } from 'react-icons/md';
import { FaInstagram, FaGlobe } from 'react-icons/fa';

import hacknyImg from '../../assets/hackny.JPG';
import sweImg from '../../assets/swe.JPEG';
import djImg from '../../assets/dj.JPG';
import soloImg from '../../assets/solo.jpg';

const aboutThings = [
  {
    title: "hackNY Fellow '25",
    img: hacknyImg,
    description: "I was selected as one of 13 fellows chosen to join hackNY’s 15th cohort, a fellowship for emerging ethical technologists interning in New York City. During the program, I lived and learned alongside a passionate group of peers, received mentorship from experienced NYC engineers, and connected with a supportive community. I also had the chance to dive into the city’s vibrant tech scene through speaker series featuring start-up founders, engineers, professors, and tech leaders, making it a meaningful experience that strengthened my growth and passion for responsible technology.",
    instagram: "https://www.instagram.com/hacknewyork/?hl=en",
    webpage: "https://hackny.org/"
  },
  {
    title: "Society of Women Engineers Dev Lead",
    img: sweImg,
    description: "My journey with the Society of Women Engineers began as a mentee in their summer mentorship program, which motivated me to become more involved. As Professional Development Chair, I organized workshops to help students prepare confidently for events like Evening with Industry. This year, I led the Dev Committee, where we’ve built websites and tools to support the club’s activities. SWE has been an incredible community of ambitious, inspiring women, and I’m grateful for the friendships and opportunities it has given me. I’m excited to keep growing with SWE and giving back well beyond college.",
    instagram: "https://www.instagram.com/swe.ucla/?hl=en",
    webpage: "https://ucla.swe.org/"
  },
  {
    title: "DJ and Music Enthusiast",
    img: djImg,
    description: "I love everything music! From producing tracks to going to concerts and festivals, I've been to over 15 so far. I also DJ as part of a duo called TWOFOLD, where we've played at six events and look forward to many more. I’m into spinning 2010s pop, techno, and house. Plus, I’ve been singing Indian classical music for over 14 years, performing both nationally and internationally, which has deeply shaped my passion for music.",
    instagram: "https://www.instagram.com/twofold.fm/?hl=en"
  },
];

function AboutThingRow({ title, img, description, imageLeft, instagram, webpage }) {
  return (
    <div className={`thing-row ${imageLeft ? 'left' : 'right'}`}>
      {imageLeft && (
        <div className="thing-image-wrapper">
          <img src={img} alt={title + " photo"} className="thing-image" />
        </div>
      )}
      <div className="thing-content">
        <h4>
          {title}{' '}
          <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${title} Instagram`}>
            <FaInstagram className="icon instagram-icon" />
          </a>
          {webpage && (
            <a href={webpage} target="_blank" rel="noopener noreferrer" aria-label={`${title} Website`}>
              <FaGlobe className="icon web-icon" />
            </a>
          )}
        </h4>
        <p>{description}</p>
      </div>
      {!imageLeft && (
        <div className="thing-image-wrapper">
          <img src={img} alt={title + " photo"} className="thing-image" />
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-grid">
        <div className="about-left">
          <a
            href="https://www.linkedin.com/in/impanac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="profile-pic-wrapper">
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
          </a>
          <a
            href="/Impana_Chimmalagi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button resume-icon-btn"
          >
            <span>View Resume</span>
            <MdEditNote className="resume-icon-inside" aria-label="Resume Icon" />
          </a>
          <div className="email-link">
            <MdEmail className="icon email-icon" />
            <a href="mailto:impana@g.ucla.edu">impana@g.ucla.edu</a>
          </div>
        </div>
        <div className="about-right">
          <h1>Impana Chimmalagi.</h1>
          <p>
            Hi! I’m currently pursuing a degree in <strong>Computer Science</strong> and Applied Mathematics at <strong>UCLA</strong>, graduating in <strong>June 2026</strong>.
            My main interests are in <strong>software engineering</strong> roles after graduation, with a strong curiosity for <strong>data engineering</strong>, which I’m studying on the side.
          </p>
          <p>
            My most recent <strong>software engineering internship</strong> was at <strong>American Express</strong>. Previously, I interned at a hedge fund as a data science intern, and I’ve also gained full stack experience through two early-stage startups.
          </p>
          <p>
            Scroll down to see the various communities I'm a part of and other involvements that make me <em>me</em>.
          </p>
          <div className="button-group">
            <a
              href="https://github.com/impana-c"
              target="_blank"
              rel="noopener noreferrer"
              className="button icon-only"
              aria-label="GitHub"
            >
              <GithubLogo className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/impanac/"
              target="_blank"
              rel="noopener noreferrer"
              className="button icon-only"
              aria-label="LinkedIn"
            >
              <LinkedinLogo className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Solo Image Full Width */}
      <div className="solo-image-container">
        <img
          src={soloImg}
          alt="Solo photo"
          className="solo-image-full"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="about-me-overlay">
          <h3 className="about-things-heading">About Me</h3>
        </div>
      </div>

      <div className="about-things-row" id="about-me-section">
        {/* <h3 className="about-things-heading">
          About Me
        </h3> */}
        <div className="things-grid">
          {aboutThings.map((thing, idx) => (
            <AboutThingRow
              key={thing.title}
              {...thing}
              imageLeft={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
