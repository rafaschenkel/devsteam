import Image from 'next/image';
import styles from './CartOption.module.css';

function CartOption ({ cartInfo, onRemove }) {
  return (
    <div className={styles.option}>
      <Image className={styles.img} src={cartInfo.img} alt={`${cartInfo.title}`} width={68} height={74}/>
      <div className={styles.info}>
        <h3 className={styles.title}>{cartInfo.title}</h3>
        <h4 className={styles.price}>R$ {cartInfo.price.toFixed(2).replace('.', ',')}</h4>
        <p className={styles.remove} onClick={onRemove} >Remover</p>
      </div>
    </div>
  );
}

export default CartOption;
