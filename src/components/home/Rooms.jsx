import React, { Component } from 'react';
import Room from './Room';
import styled from 'styled-components';
import rooms from '../../rooms-data';
import { setColor, setRem, media } from '../../styles';
import Section from '../globals/Section';
import Title from '../globals/Title';

class Rooms extends Component {
  state = { rooms };

  render() {
    return (
      <Section color={setColor.lightGrey}>
        <Title title='our rooms' center />
        <Centered>
          {this.state.rooms.map((room) => {
            return <Room key={room.id} {...room} />;
          })}
        </Centered>
      </Section>
    );
  }
}

const Centered = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${setRem(32)};
  `}

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${setRem(32)};
    width: 100vw;
    max-width: 1170px;
  `}

  ${media.large`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export default Rooms;
