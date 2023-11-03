import styled from 'styled-components';

export const DivBackdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const DivContainer = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 1);
`;
