import Head from 'next/head';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import Card from '@/components/Cards/SaleCard';
import Subtitle from '@/components/Tipography/Subtitle';
import GameCard from '@/components/Cards/GameCard';


export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <Container>
        <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>
          <div className={styles.cardscontainer}>
            <Card />
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gamecardcontainer}>
            <GameCard />
          </div>
        </div>
      </Container>
    </>
  );
}
