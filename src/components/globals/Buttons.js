import styled from 'styled-components';
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from '../../styles';

export const PrimaryButton = styled.button`
  background-color: ${setColor.primaryColor};
  display: inline-block;
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  text-decoration: none;
  cursor: pointer;
  ${setTransition};
  ${(props) =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;

export const SmallButton = styled(PrimaryButton)`
  padding: ${setRem(9)} ${setRem(12)};
  font-size: ${setRem(16)};
`;
