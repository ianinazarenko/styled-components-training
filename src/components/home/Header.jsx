import React from 'react';
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';

function Header() {
  return (
    <Hero img={aboutImg}>
      <h1>Hello</h1>
    </Hero>
  );
}

export default Header;
