import { IHeaderProps } from "../interfaces/components";
import { StyledHeader, StyledNav, StyledLogo } from "./styles/StyledHeader";
import { StyledContainer } from "./styles/StyledContainer";
import { StyledButton } from "./styles/StyledButton";
import logo from "../public/images/logo.svg";
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <StyledLogo>
            <StyledButton>Try It Free</StyledButton>
          </StyledLogo>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
