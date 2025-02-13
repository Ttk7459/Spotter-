import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleSection = styled.div`
  text-align: left;
`;

const Label = styled.span`
  font-size: 1.2rem;
  color: #666;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
  line-height: 1.2;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 10px 0;
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 15px;
  background-color: rgb(99, 103, 107);
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AccuracyChart = styled.figure`
  margin-top: 40px;
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #e4e5e1;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px; /* Added padding for the graph */
`;

const Graph = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Line = styled.path`
  fill: none;
  stroke: ${({ color }) => color};
  stroke-width: 0.5;
`;

const ChartLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DaysLabel = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

const WhyFingerprintSection = () => {
  return (
    <Header>
      <TitleSection>
        <Label>
          Why Fingerprint<span className="Label-module--cursor--a2fd2">_</span>
        </Label>
        <MainTitle>
          The internet's most<br />
          accurate visitor identifier
        </MainTitle>
        <SubTitle>
          <strong>Industry-leading accuracy</strong> that lasts for months<br />
          or years, even when cookies are cleared.
        </SubTitle>
        <LearnMoreButton href="/products/fingerprint-pro/">Learn More</LearnMoreButton>
      </TitleSection>
      <AccuracyChart>
        <Graph viewBox="0 0 120 100">
          <Line 
            color="#FF5D22" 
            d="M0,30 
               C10,20 20,40 30,30 
               C40,20 50,40 60,30 
               C70,20 80,40 90,30
               C100,20 110,40 120,30"
          />
          <Line 
            color="#907FDA" 
            d="M0,35 
               C10,45 20,35 30,45 
               C40,35 50,45 60,35
               C70,35 80,40 90,50
               C100,60 110,60 120,60"
          />
        </Graph>
        <ChartLabels>
          <DaysLabel>0</DaysLabel>
          <DaysLabel>30</DaysLabel>
          <DaysLabel>60</DaysLabel>
          <DaysLabel>90</DaysLabel>
          <DaysLabel>120</DaysLabel>
        </ChartLabels>
      </AccuracyChart>
    </Header>
  );
};

export default WhyFingerprintSection;