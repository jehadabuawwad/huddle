import { IHeaderProps } from "../interfaces/components";
import { StyledHeader, StyledNav } from "./styles/StyledHeader";
import { StyledContainer } from "./styles/StyledContainer";
import { StyledButton } from "./styles/StyledButton";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import HeaderImage from "../public/images/illustration-mockups.svg";
import { Flex } from "../components/styles/Flex.styled";
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <Image src={Logo} alt='' width='150px' height='25px' />
          <StyledButton >Try It Free</StyledButton>
        </StyledNav>
        <Flex>
          <StyledContainer>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>

              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>

              <StyledButton bg='#ff0099' color='#fff'>
                Get Started For Free
              </StyledButton>
            </div>
          </StyledContainer>
          <Image src={HeaderImage} alt='' width='500px' height='350px' />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
