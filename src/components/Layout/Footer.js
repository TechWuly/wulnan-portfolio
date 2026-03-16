import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #667eea;
      transform: translateY(-3px);
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  margin-bottom: 0.5rem;

  svg {
    color: #667eea;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 0.9rem;
`;

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About</h3>
          <p>{personal.title}</p>
          <p>Passionate full-stack developer with expertise in modern web technologies and a strong background in data management.</p>
          <SocialLinks>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <ContactItem>
            <FaEnvelope />
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>{personal.location}</span>
          </ContactItem>
          <p style={{ color: '#667eea', marginTop: '1rem' }}>{personal.availability}</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ContactItem>
            <a href="/projects">Projects</a>
          </ContactItem>
          <ContactItem>
            <a href="/experience">Experience</a>
          </ContactItem>
          <ContactItem>
            <a href="/certificate">Certificate</a>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;