import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Image } from 'next/image'
import { Img, Imgg } from '../Projects/ProjectsStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <Imgg src='/images/profil.jpg'/>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Lotfi Bokhari. I am a software engineer who builds complex information systems that make your life easier.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          //window.location.href = '/files/Resume.pdf';
          window.open('/files/Resume.pdf', "_blank");
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
