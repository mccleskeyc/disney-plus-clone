import React from 'react';
import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                
                <a href="https://www.disneyplus.com/sign-up?type=bundle" className="SignUp">GET THE BUNDLE </a>
                
                <Description>
                    The best of Disney, Pixar, Marvel, Star Wars, National Geographic and more. From new releases and exclusive originals to your favorite classics, there's something for everyone, all ad free.
                 </Description>

                 <CTALogoTwo src="/images/cta-logo-two.png" />


            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");      
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    margin-top: 100px;
`

const CTALogoOne = styled.img`
`
const Description = styled.div ` 
    font-size: 11px;
    letter-spacing: 1px;
    text-align: center;
    padding-bottom: 6px;
`

const CTALogoTwo = styled.img` 
    width: 90%
`