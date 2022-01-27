import type { AppProps } from "next/app";

function HuddleApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default HuddleApp;
