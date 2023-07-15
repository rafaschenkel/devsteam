import { FiShoppingCart } from 'react-icons/fi';
import styles from './CartButton.module.css';
import { useState } from 'react';
import CartMenu from '@/components/Cart/CartMenu';

function CartButton ({ cart, onRemove }) {
  const [ open, setOpen ] = useState(false);

  return (
    <div className={styles.cart}>
      <FiShoppingCart
        className={styles.cartbutton}
        size={40}
        onClick={() => setOpen(!open)}
      />
      {open && <CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  );
}

export default CartButton;
