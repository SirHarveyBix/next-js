import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { NotificationContextProvider } from '../store/notificationContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
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
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
