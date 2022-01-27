import type { AppProps } from "next/app";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "styled-components";

import { Theme } from "../components/styles/Theme";
import Reducers from "../state/reducers/index";
import GlobalStyles from "../components/styles/Global";

const store = createStore(Reducers, composeWithDevTools());

function HuddleApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default HuddleApp;
