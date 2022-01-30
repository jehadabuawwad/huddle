import type { NextPage } from "next";

import { Container } from "../components/styles/Container";
import Header from "../components/Header";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buddle</title>
      </Head>
      <Header title='header' />
      <Container title="body-container">
        <h1>Hello Styled Container</h1>
      </Container>
    </>
  );
};

export default Home;
