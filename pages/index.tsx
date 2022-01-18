import Head from 'next/head';
import { useState, MouseEvent } from 'react';
import { people } from '../Data/people';
import { Sidebar } from '../components/Sidebar';
import {
  Body2,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  H1,
  Subtitle2,
} from 'ui-neumorphism';

import styles from '../styles/index.module.css';

const Home = () => {
  const [selected, setSelected] = useState(1);
  let selectedPerson = people.find((person) => person.id === selected);

  const handleClick = (id: number, event: MouseEvent): void => {
    event.preventDefault();
    setSelected(id);
  };

  return (
    <div>
      <Head>
        <title>Cause Effect</title>
        <meta name='description' content='cause effect project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Sidebar
          selected={selected}
          selectedHandleClick={(id, event) => handleClick(id, event)}
        />

        <div className={styles.content}>
          <Card dark rounded width={550} height={1000}>
            <CardHeader
              title={<H1>Nome: {selectedPerson?.name}</H1>}
              subtitle={
                <Subtitle2 secondary>
                  Telefone: {selectedPerson?.telephone}
                </Subtitle2>
              }
            />
            <CardMedia height={400} dark src={selectedPerson?.image} rounded />
            <CardContent>
              <Body2>Aniversário: {selectedPerson?.birthday}</Body2>
              <Body2>
                Endereço: {selectedPerson?.street} - {selectedPerson?.city} -{' '}
                {selectedPerson?.state} - {selectedPerson?.country}
              </Body2>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
