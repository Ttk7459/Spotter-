import React from 'react';
import styled from 'styled-components';
import LogoImage from './images/image1.png';
import Graph from "./components/Graph";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color:rgba(107, 100, 100, 0.1);
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const CenterNav = styled.nav`
  display: flex;
  flex-grow: 1;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 15px;
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  color: rgb(72, 73, 75);
  cursor: pointer;
  padding: 10px 0;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const AnchorLink = styled.a`
  color: rgb(72, 73, 75);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const RightNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.a`
  margin-left: 10px;
  padding: 8px 15px;
  background-color: transparent;
  color: rgb(255, 93, 34);
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    border-color: rgb(255, 93, 34);
  }
`;

const ContactButton = styled(Button)`
  border: 1px solid rgb(255, 93, 34);
  color: rgb(255, 93, 34);
`;

const PrimaryButton = styled(Button)`
  background-color: #FF5D22;
  color: white;
  border: none;

  &:hover {
    background-color: #e0541c;
  }
`;

const MobileToggler = styled.button`
  display: none;
`;

const Header = () => {
  return (
    <>
    <Container>
      <HeaderContainer>
        <Nav>
          <LogoLink href="/">
            <img src={LogoImage} alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '8px' }} />
           
          </LogoLink>
          <p>Fingerprint</p>
        </Nav>
        <CenterNav>
          <Ul>
            <Li>
              <ButtonLink>Product</ButtonLink>
            </Li>
            <Li>
              <ButtonLink>Use Cases</ButtonLink>
            </Li>
            <Li>
              <ButtonLink>Developers</ButtonLink>
            </Li>
            <Li>
              <ButtonLink>Resources</ButtonLink>
            </Li>
            <Li>
              <ButtonLink>Demo</ButtonLink>
            </Li>
            <Li>
              <ButtonLink>              Pricing </ButtonLink>

            </Li>
          </Ul>
        </CenterNav>
        <RightNav>
          <Button href="https://dashboard.fingerprint.com/login">Login</Button>
          <ContactButton href="/contact-sales/">Contact Sales</ContactButton>
          <PrimaryButton href="https://dashboard.fingerprint.com/signup">Get Started</PrimaryButton>
          <MobileToggler aria-label="Mobile Menu">
            <span></span><span></span><span></span><span></span>
          </MobileToggler>
        </RightNav>
      </HeaderContainer>
    </Container>

    <Graph/>

    </>
  );
};

export default Header;