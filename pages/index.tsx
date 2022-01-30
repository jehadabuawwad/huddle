import { useSelector, RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import useResource from "../hooks/getResource";

import { Container } from "../components/styles/Container";
import Header from "../components/Header";

const Home: NextPage = () => {
  const data = useSelector((state: RootStateOrAny) => state.data);
  const { getResource } = useResource();

  useEffect(() => {
    getResource();
  }, [getResource]);

  return (
    <>
      <Head>
        <title>Buddle</title>
      </Head>
      <Header title='header' />
      <Container title='body-container'>
        <h1>Hello Styled Container</h1>
      </Container>
    </>
  );
};

export default Home;
