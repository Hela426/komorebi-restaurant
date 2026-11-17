
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="komorebi-header">
        <Link href="/" className="komorebi-brand">
          <strong>KOMOREBI</strong>
          <small>木漏れ日 · JAPANESE RESTAURANT</small>
        </Link>

        <span className="header-detail">
          THE ART OF JAPANESE DINING
        </span>
      </header>

      <main id="main-content">
        <section className="komorebi-hero">
          <div>
            <p className="eyebrow">
              A quiet moment, beautifully served
            </p>

            <h1>
              Where sunlight
              <br />
              meets <em>tradition.</em>
            </h1>

            <p className="hero-description">
              Discover the beauty of traditional Japanese
              cuisine, thoughtful hospitality and moments
              worth remembering.
            </p>

            <div className="hero-actions">
              <a
                href="#philosophy"
                className="komorebi-button primary"
              >
                Our philosophy
              </a>

              <a
                href="#experience"
                className="komorebi-button secondary"
              >
                Discover Komorebi
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Komorebi artwork">
            <div className="hero-art-inner">
              <span className="hero-art-kanji" lang="ja">
                木漏れ日
              </span>

              <span>JAPANESE RESTAURANT</span>
            </div>
          </div>
        </section>

        <section
          id="philosophy"
          className="story-section"
        >
          <p className="eyebrow">
            Our philosophy
          </p>

          <h2>
            The beauty of simplicity.
          </h2>

          <p>
            Komorebi celebrates Japanese culinary traditions,
            seasonal inspiration and the warmth of sharing
            a meal. Every detail invites you to slow down
            and enjoy the moment.
          </p>
        </section>

        <section
          id="experience"
          className="story-section"
        >
          <p className="eyebrow">
            The Komorebi experience
          </p>

          <h2>
            A place to feel at home.
          </h2>

          <p>
            Inspired by the soft sunlight filtering through
            leaves, our restaurant concept brings together
            natural materials, thoughtful design and
            traditional Japanese hospitality.
          </p>
        </section>
      </main>

      <footer className="komorebi-footer">
        <span>KOMOREBI · 木漏れ日</span>
        <span>CONCEPT PROJECT · 2026</span>
        <span>DESIGNED & DEVELOPED BY KAREN BARON</span>
      </footer>
    </>
  );
}
