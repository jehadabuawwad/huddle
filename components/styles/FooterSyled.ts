import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
    padding: 10px 20px 10px 10px;
    ul {
      font-size: 10px;
      padding: 25px;
    }
    p {
      text-align: center;
      font-size: 5px;
    }
  }
`;
