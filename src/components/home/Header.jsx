import React from 'react';
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';
import Banner from '../globals/Banner';
import { PrimaryButton } from '../globals/Buttons';

function Header() {
  return (
    <Hero img={aboutImg}>
      <Banner
        greeting='welcome to'
        title='beachwalk resort'
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis repudiandae totam voluptates amet iusto.'>
        <PrimaryButton t='1rem'>View details</PrimaryButton>
      </Banner>
    </Hero>
  );
}

export default Header;
