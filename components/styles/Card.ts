import styled from "styled-components";

import { ICardProps } from "../../interfaces/components";

export const Card = styled.div<ICardProps>`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-evenly;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0px;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  h2 {
    margin-right: 15px;
    margin-left: 15px;
  }
  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
  } ;
`;
