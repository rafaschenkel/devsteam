import styles from './Input.module.css';

function Input ({ fullwidth, ...props }) {
  return (
    <input
      className={`${styles.input} ${fullwidth && styles.fullwidth}`}
      {...props}
    />
  );
}

export default Input;
