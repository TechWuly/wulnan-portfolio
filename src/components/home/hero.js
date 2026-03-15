import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
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
  padding: 6rem 2rem 2rem;
  background: linear-gradient(
    -45deg,
    #667eea,
    #764ba2,
    #6b8cff,
    #9f7aea
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
    background: rgba(0, 0, 0, 0.5);
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
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;

  span {
    background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 1.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s both;
`;

const Location = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  animation: fadeInUp 1s ease 0.4s both;

  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
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

  ${({ primary }) => primary ? `
    background: white;
    color: #667eea;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  ` : `
    border: 2px solid white;
    color: white;
    &:hover {
      background: white;
      color: #667eea;
      transform: translateY(-3px);
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
    color: white;
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.1);
      color: #f0f0f0;
    }
  }
`;

// Add keyframes for animations
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

// Inject animations into styled-components
const GlobalAnimations = styled.div`
  @keyframes ${fadeInUp} {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <GlobalAnimations>
      <HeroSection>
        <HeroContent>
          <Title>
            Hi, I'm <span>{personal.name}</span>
          </Title>
          <Subtitle>{personal.title}</Subtitle>
          <Location>
            <FaMapMarkerAlt /> {personal.location}
          </Location>
          <ButtonGroup>
            <Button 
              href="#projects" 
              primary
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
            <Button 
              href={`mailto:${personal.email}`}
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
    </GlobalAnimations>
  );
};

export default Hero;