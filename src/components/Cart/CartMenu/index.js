import Button from '@/components/Forms/Button';
import CartOption from '../CartOption';
import styles from './CartMenu.module.css';

function CartMenu ({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {
          cart.length === 0 && <p>Seu carrinho está vazio!</p>
        }
        {
          cart.map((cartInfo, pos) =>
            <CartOption cartInfo={cartInfo} key={pos} onRemove={() => onRemove(pos)} />
          )
        }
      </div>
      <div className={styles.priceline}>
        <h3>Total</h3>
        <h2 className={styles.price}>R$ {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2).replace('.', ',')}</h2>
      </div>
      <Button fullwidth>
        Finalizar compra
      </Button>
    </div>
  );
}

export default CartMenu;
