import styled from 'styled-components';

export const DivMainCarItem = styled.div`
  position: relative;
  max-width: 274px;

  padding: 5px;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 12px;
`;

export const ImgCarItem = styled.img`
  border-radius: 12px;
`;

export const LabelCarItem = styled.label`
  cursor: pointer;
  position: absolute;
  appearance: none;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
`;

export const InputCarItem = styled.input`
  position: absolute;
  appearance: none;
`;

export const DivCarMark = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;
export const DivCarMarkList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  height: 53px;
`;

export const SpanCarMareList = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const PMiniDescription = styled.div`
  margin-top: 8px;
  max-height: 40px;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

export const ButtonCarItem = styled.button`
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
  border-radius: 12px;

  &:hover {
    box-shadow: none;
    background-color: rgba(11, 68, 205, 1);
  }
`;
