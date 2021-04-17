import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import './index.scss';
import { GlobalStyle } from '../styles/global-style';
import configureStore from "../reducers/configureStore";
import {Provider} from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = configureStore();
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
          </ThemeProvider>
      </Provider>

  );
};

export default MyApp;
