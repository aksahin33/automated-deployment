import styles from "./Skeleton.module.css";

export default function Skeleton({ height = "100%", width = "100%" }) {
    return <div className={styles.container} style={{ height, width }}></div>;
}
