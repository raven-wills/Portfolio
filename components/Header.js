import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: var(--white);
  letter-spacing: 0.1ch;
  padding: 0 25%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid var(--green);
  a {
    text-decoration: none;
    transition: all 0.5s;
    color: var(--green);
    font-size: 1.3em;
    padding: 1em;
    &:hover {
      color: var(--red);
      font-size: 1.4em;
    }
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 0.1em;
  color: var(--white);
  margin: 0px;
  padding: 1rem;
  background-color: var(--green);
  white-space: nowrap;
`;

const NavItem = styled.li`
  display: inline;
`;

const Header = () => (
  <HeaderContainer>
    <Title>RAVEN WILLS</Title>
    <nav>
      <ul style={{ listStyle: "none" }}>
        <NavItem>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/portfolio">
            <a>PORTFOLIO</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </NavItem>
      </ul>
    </nav>
  </HeaderContainer>
);

export default Header;
