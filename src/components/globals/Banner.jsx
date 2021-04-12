import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { setColor, setRem, setLetterSpacing, setBorder } from '../../styles';

function Banner({ className, title, text, children, greeting }) {
  return (
    // ! Important to add className
    <div className={className}>
      <h1>
        {greeting}
        <span> {title}</span>
      </h1>
      <div className='info'>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
}

function fadeIn(start, point, end) {
  const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(${start});
  }
  50% {
    opacity: 0.7;
    transform: translateY(${point});
  }
  100% {
    opacity: 1;
    transform: translateY(${end});
  }
`;

  return css`
    animation: ${animation} 3s ease-in-out;
  `;
}
export default styled(Banner)`
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};

  h1 {
    font-size: ${setRem(48)};
    text-transform: capitalize;
    color: ${setColor.primaryColor};

    span {
      color: ${setColor.mainWhite};
    }
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 70vw;
    ${setBorder({ width: '6px', color: setColor.primaryColor })};

    p {
      width: 75%;
    }
  }

  h1 {
    ${fadeIn('100%', '-10%', '0%')};
  }

  .info {
    ${fadeIn('-100%', '10%', '0%')};
  }
`;

// export default Banner;
