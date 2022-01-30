import { IHeaderProps } from "../interfaces/components";
import { StyledHeader, StyledImage, Nav } from "./styles/HeaderStyled";
import { Container } from "./styles/Container";
import { Button } from "./styles/Button";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import HeaderImage from "../public/images/illustration-mockups.svg";
import { Flex } from "./styles/Styled.Flex";
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <StyledHeader title='header'>
      <Container title='header-head'>
        <Nav title='header-nav'>
          <Image src={Logo} alt='' width='150px' height='25px' />
          <Button title='try-it-button'>Try It Free</Button>
        </Nav>
        <Flex>
          <Container title='header-body' height='100%'>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>

              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>

              <Button title='get-started-button' bg='#ff0099' color='#fff'>
                Get Started For Free
              </Button>
            </div>
            <StyledImage as='img' title='image' src={HeaderImage} alt='' />
          </Container>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
