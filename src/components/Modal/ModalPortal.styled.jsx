import styled from 'styled-components';

export const DivBackdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 10;
`;

export const ButtonClose = styled.svg`
  cursor: pointer;
  transition-property: fill;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  position: absolute;
  top: 16px;
  right: 16px;
  fill: black;

  &:hover {
    fill: #00000092;
  }
`;

export const DivContainer = styled.div`
  position: relative;
  width: 461px;
  height: auto;
  padding: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;

  @media screen and (max-width: 930px) {
    padding: 5px;
  }
`;
