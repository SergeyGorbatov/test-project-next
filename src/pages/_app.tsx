import '@/styles/globals.css';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

const store = setupStore();
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const token = Cookies.get('token-test');

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
