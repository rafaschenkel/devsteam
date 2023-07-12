import Image from 'next/image';
import styles from './GameCard.module.css';
import Button from '@/components/Forms/Button';

import gamecard from '@/json/gamecard.json';

function GameCard () {
  return (
    gamecard.map((game, index) => (
      <div className={styles.gamecard} key={index}>
        <Image src={game.img} alt={game.title} width={300} height={150} priority />
        <div className={styles.info}>
          <h3 className={styles.title}>{game.title}</h3>
          <p className={styles.subtitle}>{game.genre}</p>
          <div className={styles.pricecart}>
            <p className={styles.price}>R$ {game.price.toFixed(2).replace('.', ',')}</p>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    ))
  );
}

export default GameCard;
