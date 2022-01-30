import type { AppProps } from "next/app";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../components/styles/Styled.Global";
import { Theme } from '../components/styles/Styled.Theme';
import Reducers from "../state/reducers/index";


const store = createStore(Reducers, composeWithDevTools());

const HuddleApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default HuddleApp;
