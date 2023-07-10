import Logo from '@/components/Logo';
import styles from './Navbar.module.css';
import { BsCart4 } from 'react-icons/bs';

function Navbar () {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input type="text"/>
      <BsCart4 size={40}/>
    </nav>
  );
}

export default Navbar;