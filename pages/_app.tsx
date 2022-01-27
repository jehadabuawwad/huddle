import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducers from "../state/reducers/index";

const store = createStore(Reducers, composeWithDevTools());

function HuddleApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default HuddleApp;
