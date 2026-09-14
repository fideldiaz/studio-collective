import { Aura } from "@/components/Aura";
import { Wordmark } from "@/components/Wordmark";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.nav}>
        <a href="#top" className={styles.navBrand}>
          Studio Collective
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className={styles.hero} aria-label="Studio Collective">
        <Aura />
        <div className={styles.heroContent}>
          <Wordmark />
          <p className={`${styles.lede} ${styles.fadeUp}`}>
            Web and product engineering for ambitious brands.
          </p>
          <div className={`${styles.ctaRow} ${styles.fadeUpDelay}`}>
            <a className={styles.ctaPrimary} href="#work">
              View work
            </a>
            <a className={styles.ctaGhost} href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 className={styles.heading}>Projects shaped with care.</h2>
          <ul className={styles.workList}>
            {site.work.map((item) => (
              <li key={item.title} className={styles.workItem}>
                <div className={styles.workMeta}>
                  <h3>{item.title}</h3>
                  <span>{item.role}</span>
                </div>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="approach" className={styles.sectionAlt}>
        <div className={styles.sectionInnerNarrow}>
          <p className={styles.eyebrow}>Approach</p>
          <h2 className={styles.heading}>Small studio. Serious craft.</h2>
          <p className={styles.bodyCopy}>
            We design and build digital products that hold up - visually and
            technically. Clear collaboration, calm interfaces, and engineering
            that respects the brand.
          </p>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <Aura animated={false} />
        <div className={styles.contactInner}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.heading}>Start a project.</h2>
          <a className={styles.email} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className={styles.socials}>
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.social.x} target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Studio Collective</span>
        <span className={styles.footerTag}>Turn up your creativity</span>
      </footer>
    </main>
  );
}
