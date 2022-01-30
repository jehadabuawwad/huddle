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
  justify-content: stretch;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  } ;
`;

export const StyledImage = styled(Image)<IImageProps>`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 10px;
    width: 100%;
    
  } ;
`;
