import styles from "./ImageContainer.module.css";

export default function ImageContainer({ width, height, children, className }) {
  return (
    <div
      className={
        className ? `${styles.container} ${className}` : styles.ImageContainer
      }
      style={{ width: width || "", height: height || "" }}
    >
      {children}
    </div>
  );
}
