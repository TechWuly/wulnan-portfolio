import React from 'react';
import styled from 'styled-components';
import portfolioData from '../../data/portfolioData';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #667eea;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #667eea;
  }
`;

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h3>Front End</h3>
            <SkillsList>
              {skills.frontend.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <h3>Back End</h3>
            <SkillsList>
              {skills.backend.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <h3>Database</h3>
            <SkillsList>
              {skills.database.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory>
            <h3>Tools & Concepts</h3>
            <SkillsList>
              {skills.tools.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
              {skills.concepts.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;