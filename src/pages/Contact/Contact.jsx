import './contact.css';
import GithubLogo from '../../assets/github.svg?react';
import LinkedinLogo from '../../assets/linkedin.svg?react';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="page contact-page">
      <h1>Get In Touch</h1>
      <div className="chat-bubble bubble-you">
        <h3>Let's Connect!</h3>
      </div>
      <div className="chat-bubble bubble-them">
        <p>
          I'm always open to discussing new ideas and future opportunities.<br />
        </p>
      </div>
      <div className="chat-bubble bubble-you">
        <h3>Have Something in Mind?</h3>
      </div>
      <div className="chat-bubble bubble-them">
        <p>
          If you want to ask about my experiences, a project collaboration, or even just wanted say hi, I'll be sure to get back to you :)
        </p>
      </div>

      <div className="contact-actions-containers">
        {/* Emails group */}
        <div className="action-card">
          <a
            href="mailto:impana@ucla.edu"
            className="action-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email at UCLA"
          >
            <MdEmail className="action-icon email-icon" />
            <span>UCLA Email</span>
          </a>
          <a
            href="mailto:impana@gmail.com"
            className="action-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Personal Email"
          >
            <MdEmail className="action-icon email-icon" />
            <span>Personal Email</span>
          </a>
        </div>
        {/* Socials group */}
        <div className="action-card">
          <a
            href="https://github.com/impana-c"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="action-link"
          >
            <GithubLogo className="action-icon" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/impanac/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="action-link"
          >
            <LinkedinLogo className="action-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        </div>

      <div className="location-text">Based in <strong>Bay Area / NYC / LA</strong>.</div>
    </div>
  );
}
