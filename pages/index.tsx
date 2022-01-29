import type { NextPage } from "next";

import { StyledContainer } from "../components/styles/StyledContainer";
import Header from "../components/Header";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buddle</title>
      </Head>
      <Header title='header' />
      <StyledContainer>
        <h1>Hello Styled Container</h1>
      </StyledContainer>
    </>
  );
};

export default Home;
