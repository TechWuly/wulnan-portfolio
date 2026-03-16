import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import profileImg from '../../assets/images/profile.jpg'; 

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ $scrolled }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  padding: 2rem 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ $scrolled }) => 
    $scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ $scrolled }) => 
    $scrolled ? '#8A2BE2' : '#E6E6FA'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(138, 43, 226, 0.3);

  &:hover {
    transform: scale(1.1);
    border-color: #9370DB;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.5);
  }
`;

// Rest of your styled components remain the same...
const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ $scrolled }) => $scrolled ? '#333' : '#fff'};

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: -40px;
  margin-right: -80px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${({ $scrolled, $mobile }) => 
    $mobile ? '#333' : ($scrolled ? '#333' : '#fff')};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #E6E6FA 0%, #8A2BE2 100%);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    color: #333;
    font-size: 1.2rem;
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">
          <ProfileImage 
            src={profileImg} 
            alt="Wulnan Shadrach" 
            $scrolled={scrolled}
          />
        </Logo>

        <MenuIcon $scrolled={scrolled} onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>

        <NavMenu $isOpen={isOpen}>
          <CloseIcon onClick={toggleMenu} />
          <NavLink to="/" $scrolled={scrolled} $mobile onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" $scrolled={scrolled} $mobile onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="/experience" $scrolled={scrolled} $mobile onClick={toggleMenu}>
            Experience
          </NavLink>
          <NavLink to="/certificate" $scrolled={scrolled} $mobile onClick={toggleMenu}>
            Certificate
          </NavLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;