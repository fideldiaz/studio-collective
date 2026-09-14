import Link from "next/link";
import { Aura } from "@/components/Aura";
import { Wordmark } from "@/components/Wordmark";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Aura />
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <Wordmark size="md" showTagline={false} />
        <p className={styles.copy}>This page drifted out of frame.</p>
        <Link className={styles.link} href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
