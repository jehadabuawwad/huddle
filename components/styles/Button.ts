import styled from "styled-components";

import { IButtonProps } from "../../interfaces/components";

export const Button = styled.button<IButtonProps>`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  margin-bottom: 25px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
