import Image from 'next/image';
import styles from './SaleCard.module.css';
import Button from '@/components/Forms/Button';

function SaleCard ({ game, onAdd }) {
  return (
    <div className={styles.salecard} key={game.title}>
      <Image src={game.img} width={250} height={300} alt={game.alt} priority />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.discount}>-{game.discount}%</div>
          <div className={styles.prices}>
            <p className={styles.fullprice}>R$ {game.price.toFixed(2).replace('.', ',')}</p>
            <h4 className={styles.discountprice}>
              R$ {(Math.floor(game.price - (game.price * game.discount / 100)).toFixed(2)).replace('.', ',')}
            </h4>
          </div>
        </div>
        <Button onClick={onAdd} fullwidth>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}

export default SaleCard;
