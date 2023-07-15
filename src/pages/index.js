import Head from 'next/head';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import SaleCard from '@/components/Cards/SaleCard';
import Subtitle from '@/components/Tipography/Subtitle';
import GameCard from '@/components/Cards/GameCard';

import salecards from '@/json/salecard.json';
import gamecards from '@/json/gamecard.json';

import { useState } from 'react';

export default function Home() {
  const [ cart, setCart ] = useState([]);

  const handleAddProduct = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
      </div>
      <Container>
        <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>
          <div className={styles.cardscontainer}>
            {salecards.map((game, index) =>
              <SaleCard
                game={game}
                key={index}
                onAdd={() => handleAddProduct(game)}
              />
            )}
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gamecardcontainer}>
            {gamecards.map((game, index) =>
              <GameCard
                game={game}
                key={index}
                onAdd={() => handleAddProduct(game)}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
