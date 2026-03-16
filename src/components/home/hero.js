import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 1rem;
  background: linear-gradient(
    -45deg,
   
    #CBC3E3,  /* Light purple */
    #9370DB,  /* Medium purple */
    #8A2BE2   /* Blue violet */
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 4rem);
  margin-bottom: 0.5;
  animation: fadeInUp 1s ease;
  color: white;
  text-shadow: 3px 3px 4px rgba(138, 43, 226, 0.3);

  span {
    background: linear-gradient(125deg, #FFFFFF 0%, #E6E6FA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 8px rgba(138, 43, 226, 0.5);
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 1.4rem);
  margin-bottom: 0.5rem;
  opacity: 0.95;
  animation: fadeInUp 1s ease 0.2s both;
  color: #F0E6FF;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Location = styled.p`
  font-size: 1.1rem;
  margin-bottom: 6rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.4s both;
  color: #F8F0FF;

  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
    color: #E6E6FA;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease 0.6s both;
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${({ $primary }) => $primary ? `
    background: #8A2BE2;  /* Blue violet */
    color: white;
    border: 2px solid #E6E6FA;
    &:hover {
      background: #9370DB;  /* Medium purple */
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
    }
  ` : `
    border: 2px solid #E6E6FA;
    color: white;
    background: rgba(230, 230, 250, 0.2);
    backdrop-filter: blur(5px);
    &:hover {
      background: #8A2BE2;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
    }
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  animation: fadeInUp 1s ease 0.8s both;

  a {
    color: #E6E6FA;
    font-size: 1.8rem;
    transition: all 0.3s ease;
    background: rgba(138, 43, 226, 0.2);
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    border: 1px solid #D8BFD8;

    &:hover {
      transform: translateY(-5px) scale(1.1);
      color: white;
      background: #8A2BE2;
      box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
    }
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <HeroSection>
      <HeroContent>
        <Title>
          Hi,I'm <span>{personal.name}</span>
        </Title>
        <Subtitle>{personal.title}</Subtitle>
        <Location>
          <FaMapMarkerAlt /> {personal.location}
        </Location>
        <ButtonGroup>
          <Button 
            href="#projects" 
            $primary
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>
          <Button 
            href="mailto:wulnanshadrach268@gmail.com"
          >
            <FaEnvelope /> Contact Me
          </Button>
        </ButtonGroup>
        <SocialLinks>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personal.email}`}>
            <FaEnvelope />
          </a>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;