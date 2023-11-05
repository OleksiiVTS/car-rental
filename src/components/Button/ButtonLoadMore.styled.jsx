import styled from 'styled-components';

export const ButtonLoadMor = styled.button`
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  margin-top: 28px;
  width: 100%;
  height: 44px;
  color: white;
  background-color: rgba(52, 112, 255, 1);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  &:hover {
    box-shadow: none;
    background-color: rgba(11, 68, 205, 1);
  }
`;
