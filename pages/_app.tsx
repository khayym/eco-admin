import { AppProvider } from '../app/AppProvider';
import Layout from '../shared/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
