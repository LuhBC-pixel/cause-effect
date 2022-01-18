import Head from 'next/head';
import { Sidebar } from '../components/Sidebar';

import styles from '../styles/index.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cause Effect</title>
        <meta name='description' content='cause effect project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Sidebar />

        <div className={styles.content}>
          <h1>Cause Effect</h1>

          <p>Nome:</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
