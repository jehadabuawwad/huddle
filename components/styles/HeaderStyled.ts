import styled from "styled-components";

import { IHeaderProps } from "../../interfaces/components";
import { INavProps } from "../../interfaces/components";
import { IImageProps } from "../../interfaces/components";
import Image from "next/image";

export const StyledHeader = styled.header<IHeaderProps>`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
`;

export const Nav = styled.nav<INavProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;

  button {
    position: absolute;
    right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  } ;
`;

export const StyledImage = styled(Image)<IImageProps>`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 25px;
    width: 100%;
  } ;
`;
