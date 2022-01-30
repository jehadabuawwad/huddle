import styled from "styled-components";

import { IImageProps } from "../../interfaces/components";
import Image from "next/image";

export const Photo = styled(Image)<IImageProps>`
  height: 30%;
  width: 30%;
  height: 20%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 100%;
  } ;
`;
