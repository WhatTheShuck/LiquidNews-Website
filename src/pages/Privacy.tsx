export default function Privacy() {
  return (
    <main className="privacy-page">
      <header className="page-header">
        <h1 className="page-title">
          Privacy{' '}
          <span style={{
            background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Policy
          </span>
        </h1>
        <p className="page-subtitle">Last updated: April 2026</p>
      </header>

      <div className="privacy-body">
        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            LiquidNews is a Hacker News reader for iOS. Your privacy is straightforward:
            all data stays on your device, nothing is collected by us, and there is no
            advertising or tracking of any kind.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data stored on your device</h2>
          <p>LiquidNews stores the following data locally, on your device only:</p>
          <ul>
            <li>
              <strong>HN account credentials</strong> — your Hacker News username is
              stored in the iOS Keychain. Your password is used only to authenticate
              with Hacker News and is never stored by the app.
            </li>
            <li>
              <strong>Reading history</strong> — stories you have opened are recorded
              locally so the app can dim or hide already-read items.
            </li>
            <li>
              <strong>Saved posts &amp; favourites</strong> — items you bookmark or
              favourite are kept in local storage on the device.
            </li>
            <li>
              <strong>App preferences</strong> — settings such as your preferred tab
              order, swipe actions, and curated sources are stored in UserDefaults on
              your device.
            </li>
          </ul>
          <p>None of this data is transmitted to us or any third party.</p>
        </section>

        <section className="privacy-section">
          <h2>Third-party services</h2>
          <p>
            LiquidNews communicates with the following external services on your behalf.
            We have no control over their data practices — please review their own
            privacy policies.
          </p>
          <ul>
            <li>
              <strong>Hacker News API</strong> (<a href="https://news.ycombinator.com" target="_blank" rel="noreferrer">news.ycombinator.com</a>) —
              used to fetch stories, comments, and to submit votes or replies when you
              are logged in. Operated by Y Combinator.
            </li>
            <li>
              <strong>Algolia HN Search</strong> (<a href="https://hn.algolia.com" target="_blank" rel="noreferrer">hn.algolia.com</a>) —
              used to power in-app search and the Catch Up date-range feature. Your
              search queries are sent to Algolia's servers.
            </li>
            <li>
              <strong>Curated newsletter sources</strong> — the Curated tab fetches
              content from a set of tech newsletter feeds you enable in Settings.
              Requests go directly to those sources.
            </li>
            <li>
              <strong>Article URLs</strong> — when you open an article in the in-app
              browser, your device connects directly to that website.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>No analytics or advertising</h2>
          <p>
            LiquidNews contains no analytics SDKs, no advertising networks, and no
            crash-reporting services. There is no tracking of any kind.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's privacy</h2>
          <p>
            LiquidNews is rated 12+ on the App Store due to unrestricted web content
            accessible through the in-app browser. The app does not knowingly collect
            any information from children under 13.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to this policy</h2>
          <p>
            If this policy changes materially, the updated version will be posted here
            with a revised date at the top.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact</h2>
          <p>
            Questions or concerns? Open an issue on{' '}
            <a href="https://github.com/WhatTheShuck/LiquidNews/issues" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>
      </div>

      <footer className="site-footer">
        <span className="footer-logo">Liquid News</span>
        <span>© {new Date().getFullYear()} · Built with care</span>
      </footer>
    </main>
  )
}
