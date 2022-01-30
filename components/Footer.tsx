import { Flex } from "./styles/Styled.Flex";
import { StyledImage } from "./styles/HeaderStyled";
import footerLogo from "../public/images/logo_white.svg";
import { StyledFooter } from "./styles/FooterSyled";
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <>
      <StyledFooter title='footer-container'>
        <StyledImage
          as='img'
          title='footer-logo'
          src={footerLogo}
        ></StyledImage>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>
      </StyledFooter>
    </>
  );
};

export default Footer;
