import styles from './Button.module.css';

function Button ({ children, fullwidth }) {
  return (
    <button className={`${styles.button} ${fullwidth && styles.fullwidth}`}>
      {children}
    </button>
  );
}

export default Button;
