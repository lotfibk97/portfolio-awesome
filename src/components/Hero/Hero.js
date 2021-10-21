import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Lotfi Bokhari. I am a software engineer who builds complex information systems that makes your life easier.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/Resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
