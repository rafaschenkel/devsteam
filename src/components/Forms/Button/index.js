import styles from './Button.module.css';

function Button ({ children, fullwidth, ...props }) {
  return (
    <button {...props} className={`${styles.button} ${fullwidth && styles.fullwidth}`}>
      {children}
    </button>
  );
}

export default Button;
