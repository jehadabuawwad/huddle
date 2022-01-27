import { IHeaderProps } from "../interfaces/components";
import { StyledHeader } from "./styles/StyledHeader";

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <StyledHeader >
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
