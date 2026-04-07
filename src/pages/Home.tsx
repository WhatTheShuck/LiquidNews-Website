import { Link } from 'react-router-dom'

const PHONE_STORIES = [
  {
    title: "Ask HN: What's the most impactful side project you've shipped?",
    domain: 'news.ycombinator.com',
    points: '847 points',
  },
  {
    title: "We built a compiler in a weekend \u2014 here's what we learned",
    domain: 'blog.example.com',
    points: '612 points',
  },
  {
    title: 'The unreasonable effectiveness of just shipping things',
    domain: 'medium.com',
    points: '1.2k points',
  },
]

const FEATURES = [
  {
    icon: '✦',
    title: 'Curated Feed',
    desc: 'Hand-picked articles from Hacker News — the signal, without the noise. Updated by a human who reads everything.',
  },
  {
    icon: '◈',
    title: 'Liquid Glass UI',
    desc: 'Built for the new era of iOS design. Translucent surfaces, fluid transitions, and depth that feels native.',
  },
  {
    icon: '◎',
    title: 'Full HN Integration',
    desc: 'Jump straight into comments, vote, and explore threads without leaving the app. HN, at your fingertips.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available on iOS
        </div>

        <h1 className="hero-headline">
          Hacker News,{' '}
          <span className="hero-headline-accent">Refined.</span>
        </h1>

        <p className="hero-sub">
          A beautiful iOS reader built for the way you actually consume tech news.
          Liquid glass aesthetic, curated content, full comment threads.
        </p>

        <div className="hero-actions">
          <a
            href="https://apps.apple.com"
            className="btn-appstore"
            target="_blank"
            rel="noreferrer"
          >
            <AppleIcon />
            Download on the App Store
          </a>
          <Link to="/articles" className="btn-secondary">
            See curated articles →
          </Link>
        </div>

        {/* Phone mockup */}
        <div className="phone-mockup-wrapper">
          <div className="phone-mockup-glow" />
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-app-bar">
                <span className="phone-app-title">Liquid News</span>
                <div className="phone-status">
                  <div className="phone-status-dot" />
                  <div className="phone-status-dot" style={{ opacity: 0.5 }} />
                  <div className="phone-status-dot" style={{ opacity: 0.25 }} />
                </div>
              </div>
              {PHONE_STORIES.map((story, i) => (
                <div key={i} className="phone-story">
                  <div className="phone-story-title">{story.title}</div>
                  <div className="phone-story-meta">
                    <span className="phone-story-domain">{story.domain}</span>
                    <span className="phone-story-points">{story.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <span className="section-label">Why Liquid News</span>
        <h2 className="section-title">
          Everything you want<br />from a news reader.
        </h2>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <span className="footer-logo">Liquid News</span>
        <span>© {new Date().getFullYear()} · Built with care</span>
      </footer>
    </>
  )
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.182 0c.08.64-.19 1.29-.6 1.75-.41.47-.99.8-1.57.76-.09-.6.19-1.22.59-1.65C10 .41 10.62.09 11.18 0zM13.5 10.6c-.21.63-.49 1.22-.85 1.75-.5.72-1.01 1.44-1.82 1.45-.78.01-1.04-.46-1.94-.47-.9-.01-1.18.47-1.96.48-.8.01-1.35-.7-1.85-1.42C4.13 11 3.5 9.1 3.5 7.25c0-2.47 1.61-3.78 3.2-3.8.82-.01 1.6.52 2.1.52.5 0 1.44-.64 2.43-.54.41.02 1.57.17 2.32 1.27-.06.04-1.39.81-1.38 2.41.02 1.9 1.67 2.53 1.33 3.49z" />
    </svg>
  )
}
