import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: #E6E6FA;
`;

const ExperienceContainer = styled.div`
  max-width: 1000px;
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

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 2rem 0;
  width: 50%;
  
  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    left: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px !important;
    padding-right: 25px !important;
    left: 0 !important;
    justify-content: flex-start !important;
  }
`;

const TimelineContent = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: #f8f9fa;
    transform: rotate(45deg);
    box-shadow: 4px -4px 6px rgba(0, 0, 0, 0.05);

    ${TimelineItem}:nth-child(odd) & {
      left: -10px;
      right: auto;
      box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 768px) {
      left: -10px !important;
      right: auto !important;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  top: 20px;

  @media (max-width: 768px) {
    left: 22px;
  }
`;

const Role = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #667eea;
  }
`;

const Organization = styled.h4`
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Period = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Responsibilities = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const Responsibility = styled.li`
  color: #666;
  font-size: 0.95rem;
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <Timeline>
          {experience.map((exp, index) => (
            <TimelineItem key={exp.id}>
              <TimelineDot />
              <TimelineContent>
                <Role>
                  <FaBriefcase /> {exp.role}
                </Role>
                <Organization>
                  <FaBuilding /> {exp.organization}
                </Organization>
                <Period>
                  <FaCalendarAlt /> {exp.period}
                </Period>
                <Responsibilities>
                  {exp.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx}>{resp}</Responsibility>
                  ))}
                </Responsibilities>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;