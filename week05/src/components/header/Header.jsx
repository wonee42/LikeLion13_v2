import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/project">Project</Link></NavItem>
        <NavItem><Link to="/diary">Diary</Link></NavItem>
       
      </Nav>
      <Logo></Logo>
      <Nav>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/project">Project</Link></NavItem>
        <NavItem><Link to="/diary">Diary</Link></NavItem>
      
      </Nav>


    </HeaderWrapper>
  );
}
