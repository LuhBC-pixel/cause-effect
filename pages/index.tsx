import Head from 'next/head';
import { people } from '../Data/people';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cause Effect</title>
        <meta name='description' content='cause effect project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <nav>
            {people.map((person) => (
              <ul key={person.id}>
                <li>{person.name}</li>
              </ul>
            ))}
          </nav>
        </div>

        <h1>Cause Effect</h1>
      </main>
    </div>
  );
};

export default Home;
