import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;
    background-size: cover;
    background-position: top;
  }
`;

const CTA = styled.div`
  margin-top: 50px;

  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img`
  position: relative;
`;

const SignUp = styled.a`
  position: relative;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 0;
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  text-align: center;
  cursor: pointer;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0152ce;
  }
`;

const Description = styled.p`
  position: relative;
  font-size: 11px;
  letter-spacing: 0.7px;
  text-align: center;
  margin-top: 8px;
`;
const CTALogoTwo = styled.img`
  position: relative;
  margin-top: 8px;
  width: 90%;
  align-self: center;
`;
