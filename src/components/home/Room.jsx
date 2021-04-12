import React from 'react';
import { SmallButton } from '../globals/Buttons';
import styled from 'styled-components';
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  setShadow,
  media,
  setTransition,
} from '../../styles';
import PropTypes from 'prop-types';

function Room({ className, ...props }) {
  const { img = '', title = '', info = '', price = 0 } = props;
  return (
    <article className={className}>
      <div className='img-container'>
        <img src={img} alt='single room' />
        <div className='price'>${price}</div>
      </div>
      <div className='room-info'>
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallButton t='1rem' b='1.5rem'>
          More info
        </SmallButton>
      </div>
    </article>
  );
}

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;

  .img-container {
    background: ${setColor.mainBlack};
    position: relative;

    img {
      width: 100%;
      display: block;
      ${setTransition};
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(3)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }

    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
    padding: ${setRem()};

    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};

      p {
        ${setLetterSpacing()};
      }
    }
  }

  ${setShadow.light};
  ${setTransition()};

  &:hover {
    ${setShadow.dark}
    transform: scale(0.98)
  }
`;

Room.propTypes = {
  props: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
