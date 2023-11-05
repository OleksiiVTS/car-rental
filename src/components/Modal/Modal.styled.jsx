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

export const DivImgBox = styled.div`
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    circle,
    rgb(0, 0, 0),
    rgba(52, 113, 255, 0.842)
  );
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const ImgCarModal = styled.img`
  width: auto;
  height: 248px;
  border-radius: 12px;
`;

export const DivModalMarkList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
`;

export const SpanModalMareList = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const DivMiniDescription = styled.div`
  margin-top: 8px;
  /* max-width: 277px; */
  max-height: 40px;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;
export const PDescription = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;

export const HFourModal = styled.h4`
  margin-top: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
`;

export const UlModalConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

export const ButtonModal = styled.a`
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  width: 168px;
  height: 44px;
  color: white;
  background-color: rgba(52, 112, 255, 1);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 12px;

  &:hover {
    box-shadow: none;
    background-color: rgba(11, 68, 205, 1);
  }
`;
