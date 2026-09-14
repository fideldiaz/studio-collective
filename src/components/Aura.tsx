import styles from "./Aura.module.css";

type AuraProps = {
  className?: string;
  animated?: boolean;
};

export function Aura({ className = "", animated = true }: AuraProps) {
  return (
    <div
      className={`${styles.aura} ${animated ? styles.animated : ""} ${className}`}
      aria-hidden="true"
    >
      <div className={styles.glowWarm} />
      <div className={styles.glowCool} />
      <div className={styles.glowCenter} />
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
