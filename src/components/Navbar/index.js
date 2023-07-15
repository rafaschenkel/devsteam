import Logo from '@/components/Logo';
import CartButton from '@/components/Forms/CartButton';
import Input from '@/components/Forms/Input';
import styles from './Navbar.module.css';

function Navbar ({ cart, onRemove }) {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.logo}/>
      <div className={styles.search}>
        <Input placeholder="Buscar" type="text" fullwidth />
      </div>
      <CartButton
        cart={cart}
        onRemove={onRemove}
      />
    </nav>
  );
}

export default Navbar;
