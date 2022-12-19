import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container header-content">
        <Link to="/">
          <figure className="logo">
            <img
              src="https://static.neris-assets.com/images/personality-types/headers/fb/logo.png"
              alt="logo"
              loading="lazy"
            />
          </figure>
        </Link>

        <nav className="nav-links__container">
          {["Career", "Directory", "Blogs"].map((link, index) => (
            <a className="nav-link" href="#" key={index}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
