import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface Item {
  hnID: string
  title: string
  date: string
  note?: string
}

interface CuratedData {
  version: number
  items: Item[]
}

function hnUrl(id: string): string {
  return `https://news.ycombinator.com/item?id=${id}`
}

function formatDate(yyyy_mm_dd: string): string {
  const [year, month, day] = yyyy_mm_dd.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Articles() {
  const [items, setItems] = useState<Item[]>([])
  const [status, setStatus] = useState<'loading' | 'error' | 'done'>('loading')

  useEffect(() => {
    fetch('/curated.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<CuratedData>
      })
      .then((data) => {
        setItems(data.items)
        setStatus('done')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <>
      <main className="articles-page">
        <header className="page-header">
          <h1 className="page-title">
            Curated{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Reading
            </span>
          </h1>
          <p className="page-subtitle">
            Hand-picked articles from Hacker News worth your time.
          </p>
        </header>

        {status === 'loading' && (
          <div className="state-container">
            <div className="spinner" />
            Loading articles…
          </div>
        )}

        {status === 'error' && (
          <div className="state-container">
            <span style={{ fontSize: 28 }}>◌</span>
            Could not load articles. Try again later.
          </div>
        )}

        {status === 'done' && items.length === 0 && (
          <div className="state-container">
            <span style={{ fontSize: 28 }}>◌</span>
            No articles yet — check back soon.
          </div>
        )}

        {status === 'done' && items.length > 0 && (
          <ol className="articles-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {items.map((item) => (
              <li key={item.hnID}>
                <article className="glass-card article-card">
                  <h2 className="article-title">{item.title}</h2>
                  {item.note && (
                    <p className="article-notes">{item.note}</p>
                  )}
                  <div className="article-links">
                    <a
                      href={hnUrl(item.hnID)}
                      className="article-link article-link-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HNIcon />
                      HN discussion
                    </a>
                    <time dateTime={item.date} className="article-date">
                      {formatDate(item.date)}
                    </time>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        )}
      </main>

      <footer className="site-footer">
        <span className="footer-logo">Liquid News</span>
        <span>© {new Date().getFullYear()} · Built with care</span>
        <NavLink to="/privacy" className="footer-link">Privacy Policy</NavLink>
      </footer>
    </>
  )
}

function HNIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <rect width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
      <text x="3.5" y="9.5" fontSize="8" fontWeight="700" fill="currentColor" fontFamily="sans-serif">Y</text>
    </svg>
  )
}
