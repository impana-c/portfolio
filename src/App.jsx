import { Link } from "react-router-dom";

export default function App({ children }) {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">home</Link>
        </div>
        <div className="navbar-right">
          <Link to="/experience">experience</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

