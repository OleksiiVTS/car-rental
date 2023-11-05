import styled from 'styled-components';
import backdrop from '../../components/Pictures/istockphoto-480652712-612x612.jpg';

export const DivContainer = styled.div`
  max-width: 1440px;
  height: auto;
`;

export const SectionPhoto = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 600px;

  background-color: rgba(8, 81, 165, 0.7);
  background-image: linear-gradient(
      0.25turn,
      rgba(52, 112, 255, 0.1),
      rgba(52, 112, 255, 0.1)
    ),
    url(${backdrop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1440px 600px;
  text-align: center;
`;

export const SectionNav = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const DivTextNav = styled.div`
  margin-top: 20px;
  padding: 0 15px;

  div {
    max-width: 500px;
    margin: 0 auto;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const DivListNav = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    cursor: pointer;
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 200px;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    background-color: rgba(8, 81, 165, 0.7);
    border: 2px solid rgba(8, 81, 165, 0.808);
    border-radius: 12px;

    &:hover {
      background-color: rgba(8, 81, 165, 0.808);
    }
    svg {
      fill: rgba(212, 232, 255, 0.932);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const SectionSlider = styled(SectionNav)`
  background-color: rgba(8, 81, 165, 0.7);
`;
export const SectionMap = styled(SectionNav)``;
export const DivMap = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 600px;
  height: 600px;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const SectionContact = styled(SectionNav)`
  background-color: rgba(8, 81, 165, 0.7);
`;
export const DivBoxContact = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 50px;
  width: 100%;
`;

export const DivBoxContactTel = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

  a {
    color: black;
    &:hover {
      color: rgba(0, 0, 0, 0.445);
    }
  }

  p {
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.445);
    }
  }
`;
