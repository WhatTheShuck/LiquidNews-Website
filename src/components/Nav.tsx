import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="site-nav">
      <NavLink to="/" className="nav-logo">
        <span className="nav-logo-dot" />
        Liquid News
      </NavLink>
      <div className="nav-links">
        <NavLink
          to="/articles"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Curated
        </NavLink>
        <a
          href="https://apps.apple.com"
          className="nav-cta"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
