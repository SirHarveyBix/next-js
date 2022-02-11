import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <>
        <Head>
          {/* Provides meta everwhere that dosen't have any .. just in case */}
          <title>Next Event</title>
          <meta
            name="description"
            content="Find event or go to https://github.com/SirHarveyBix/next-js/tree/master/small-project for details"
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    </Layout>
  );
}

export default MyApp;
