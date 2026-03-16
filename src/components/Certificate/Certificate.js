import React from 'react';
import styled from 'styled-components';
import { FaCertificate, FaClock, FaGraduationCap } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';

const CertificateSection = styled.section`
  padding: 4rem 2rem;
  background: #E6E6FA;
`;

const CertificateContainer = styled.div`
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

const CertificateCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #667eea, #764ba2) border-box;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 70%
    );
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`;

const CertificateIcon = styled.div`
  font-size: 4rem;
  color: #667eea;
  margin-bottom: 1.5rem;
`;

const CertificateTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Institution = styled.h4`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 1rem;
`;

const BadgeSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);

  svg {
    font-size: 1.2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const SkillTag = styled.div`
  background: #f0f0f0;
  padding: 0.8rem;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-3px);
  }
`;

const CriteriaSection = styled.div`
  text-align: left;
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const CriteriaTitle = styled.h5`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CriteriaList = styled.ul`
  list-style: none;
`;

const CriteriaItem = styled.li`
  color: #666;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
  }
`;

const Certificate = () => {
  const { education } = portfolioData;
  const cert = education.certificate;

  return (
    <CertificateSection id="certificate">
      <CertificateContainer>
        <SectionTitle>Education & Certification</SectionTitle>
        <CertificateCard>
          <CertificateIcon>
            <FaCertificate />
          </CertificateIcon>
          <CertificateTitle>Certificate of Completion</CertificateTitle>
          <Institution>Awarded to {portfolioData.personal.name}</Institution>
          
          <BadgeSection>
            <Badge>
              <FaGraduationCap /> {cert.title}
            </Badge>
            <Badge>
              <FaClock /> {cert.hours}
            </Badge>
          </BadgeSection>

          <p style={{ color: '#666', margin: '1rem 0' }}>
            for successfully completing the required {cert.hours} course of study in {cert.title} at {cert.institution}
          </p>

          <p style={{ 
            fontStyle: 'italic', 
            color: '#888',
            margin: '1rem 0',
            padding: '1rem',
            borderTop: '1px solid #eee',
            borderBottom: '1px solid #eee'
          }}>
            This badge is representative of a BloomTech graduate's skill level in Web Development 
            and foundational Computer Science. These students have demonstrated that they're able 
            to learn languages, libraries, and frameworks, enabling them to keep up with current 
            technologies.
          </p>

          <SkillsGrid>
            {cert.skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsGrid>

          <CriteriaSection>
            <CriteriaTitle>
              <FaGraduationCap /> Earning Criteria
            </CriteriaTitle>
            <CriteriaList>
              <CriteriaItem>
                Completed full-stack web development curriculum, and demonstrated competency 
                of content through weekly assessments.
              </CriteriaItem>
              <CriteriaItem>
                Complete a front-end and back-end project during their Web Development portion 
                of the curriculum.
              </CriteriaItem>
              <CriteriaItem>
                Completed applied computer science curriculum, and demonstrated competency 
                of content.
              </CriteriaItem>
              <CriteriaItem>
                Completed BloomTech Labs, in which they integrated advanced technical skills 
                on complex projects, and effectively communicated code contributions in a 
                mock technical interview.
              </CriteriaItem>
              <CriteriaItem>
                Passed final assessments and interviews demonstrating their technical and 
                professional proficiencies.
              </CriteriaItem>
            </CriteriaList>
          </CriteriaSection>
        </CertificateCard>
      </CertificateContainer>
    </CertificateSection>
  );
};

export default Certificate;