import styles from "./Wordmark.module.css";

type WordmarkProps = {
  showTagline?: boolean;
  size?: "hero" | "md" | "sm";
  className?: string;
};

export function Wordmark({
  showTagline = true,
  size = "hero",
  className = "",
}: WordmarkProps) {
  return (
    <div className={`${styles.wrap} ${styles[size]} ${className}`}>
      <p className={styles.brand} aria-label="Studio Collective">
        <span>Studio</span>
        <span>Collective</span>
      </p>
      {showTagline ? (
        <p className={styles.tagline}>Turn up your creativity</p>
      ) : null}
    </div>
  );
}
