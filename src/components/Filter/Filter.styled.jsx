import styled from 'styled-components';
import { ButtonClose } from 'components/Modal/Modal.styled';
import { Formik, Field, Form } from 'formik';

export const FormikStyled = styled(Formik)``;

export const ButtonCloseFormik = styled(ButtonClose)`
  display: none;
  @media screen and (max-width: 930px) {
    display: block;
  }
`;
export const FormStyledFormik = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 930px) {
    position: absolute;
    top: 0;
    left: ${props => (props.mode === 'true' ? `0` : `-410px`)};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 14px;
    height: 100%;

    background-color: #fff;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 12px;
    z-index: 3;
  }
`;

export const LabelFormik = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: rgba(138, 138, 137, 1);
`;

export const SpanMark = styled.span`
  pointer-events: none;
  position: absolute;
  bottom: 16px;
  left: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: rgba(18, 20, 23, 1);
`;
export const SpanPrice = styled(SpanMark)`
  left: 75px;
`;

export const DivFormikMileage = styled.div`
  display: flex;
`;

export const FieldStyledFormik = styled(Field)`
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  /* appearance: none; */
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;

  border: none;
  min-width: 160px;
  height: 48px;
  outline: none;
  margin-top: 8px;
  padding: 14px 49px 14px 14px;
  background-color: rgba(247, 247, 251, 1);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 12px;

  &:hover {
    background-color: #c1c1c536;
  }
`;

export const FieldStyledFormikPrice = styled(FieldStyledFormik)`
  padding: 14px 20px 14px 39px;
  min-width: 105px;
`;

export const OptionSelectFormik = styled.option`
  cursor: pointer;
  /* appearance: none; */
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.425);

  &:hover {
    color: rgb(18, 20, 23);
  }
`;

export const InputFrom = styled.input`
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;

  border: none;
  width: 160px;
  height: 48;
  outline: none;
  margin-top: 8px;
  padding: 14px;
  background-color: rgba(247, 247, 251, 1);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 12px 0 0 12px;

  &:hover {
    background-color: #c1c1c536;
  }
`;

export const InputTo = styled(InputFrom)`
  border-radius: 0 12px 12px 0;
`;

export const ButtonFormik = styled.button`
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  width: 136px;
  height: 48px;
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

export const DivButtonOpenFormik = styled.div`
  margin-bottom: 20px;
  max-width: 1440px;
  padding: 0 15px;
`;

export const ButtonOpenFormik = styled(ButtonFormik)`
  width: 100%;
  color: black;
  background-color: rgb(247, 247, 251);
  display: none;

  &:hover {
    background-color: #c1c1c536;
  }

  @media screen and (max-width: 930px) {
    display: block;
  }
`;
