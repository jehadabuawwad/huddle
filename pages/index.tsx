import type { NextPage } from "next";

import { StyledContainer } from "../components/styles/StyledContainer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header title='header' />
      <StyledContainer>
        <h1>Hello Styled Container</h1>
      </StyledContainer>
    </>
  );
};

export default Home;
