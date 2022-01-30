import styled from "styled-components";

import { IHeaderProps } from "../../interfaces/components";
import { INavProps } from "../../interfaces/components";

export const StyledHeader = styled.header<IHeaderProps>`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
`;

export const Nav = styled.nav<INavProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;
