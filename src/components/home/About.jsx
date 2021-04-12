import React from 'react';
import Section from '../globals/Section';
import Title from '../globals/Title';
import { PrimaryButton } from '../globals/Buttons';
import styled from 'styled-components';
import aboutImg from '../../images/aboutBcg.jpeg';
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from '../../styles';

function About() {
  return (
    <Section color='white'>
      <Centered>
        <div className='about-img'>
          <img src={aboutImg} alt='about us' />
        </div>
        <div className='about-info'>
          <Title title='About us' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            accusamus est et quasi praesentium, quo impedit explicabo nesciunt,
            temporibus fugiat maiores quis odio laudantium reiciendis beatae
            exercitationem enim nobis fuga.
          </p>
          <PrimaryButton t='1rem'>Read more</PrimaryButton>
        </div>
      </Centered>
    </Section>
  );
}

const Centered = styled.div`
  width: 90vw;
  margin: 0 auto;

  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })};
    }

    .about-info {
      p {
        ${setLetterSpacing(3)};
      }
    }
  }

  ${media.desktop`
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;

    .about-img,
    .about-info {
      /* padding: ${setRem(0)}; */
  }
  `}
`;

export default About;
