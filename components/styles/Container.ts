import styled from "styled-components";

import { IContainerProps } from "../../interfaces/components";

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  max-width: 95%;
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
`;
