import Image from 'next/image';
import styles from './Logo.module.css';

function Logo () {
  return (
    <div className={styles.logo}>
      <Image 
        src='/logo.svg' 
        width={60} 
        height={60} 
        alt='Logo DevSteam'
        priority={true}
      />
      <h1>DevSteam</h1>
    </div>
  );
}

export default Logo;