import Subtitle from '@/components/Tipography/Subtitle';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Container from '@/components/Container';
import Cards from '@/components/Cards/SaleCard';

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
        <div>
          <Subtitle>Promoções</Subtitle>
          <div>
            <Cards />
          </div>
        </div>
        <div>
          <Subtitle>Outros jogos</Subtitle>
        </div>
      </Container>
    </>
  );
}
