import Image from 'next/image';
import styles from './SaleCard.module.css';
import Button from '@/components/Forms/Button';

import games from '@/json/games.json';

function Cards () {
  return (
    games.map((game,index) => (
      <div className={styles.salecard} key={index}>
        <Image src={game.img} width={250} height={300} alt={game.alt} priority />
        <div className={styles.info}>
          <h3 className={styles.title}>Oferta Exclusiva</h3>
          <div className={styles.pricecard}>
            <div className={styles.discount}>-20%</div>
            <div className={styles.prices}>
              <p className={styles.fullprice}>R$ 99,90</p>
              <h4 className={styles.discountprice}>R$ 79,90</h4>
            </div>
          </div>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </div>
    ))
  );
}

export default Cards;
