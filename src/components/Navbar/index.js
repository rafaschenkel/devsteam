import Logo from '@/components/Logo';
import styles from './Navbar.module.css';
import { BsCart4 } from 'react-icons/bs';
import Input from '../Forms/Input';

function Navbar () {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.logo}/>
      <div className={styles.search}>
        <Input placeholder="Buscar" type="text" fullwidth />
      </div>
      <BsCart4 size={40}/>
    </nav>
  );
}

export default Navbar;
