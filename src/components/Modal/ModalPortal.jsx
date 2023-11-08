import React from 'react';
import sprite from '../Pictures/sprite.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DivBackdrop, DivContainer, ButtonClose } from './ModalPortal.styled';

const Modal = ({ closeModal, children }) => {
  const dispatch = useDispatch();

  const closeBackdrop = e => {
    const isBackdrop = e.target.attributes.name?.nodeValue;
    if (isBackdrop) {
      closeModal();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, closeModal]);

  return (
    <DivBackdrop name="backdrop" onClick={closeBackdrop}>
      <DivContainer>
        <ButtonClose width={16} height={16} onClick={closeModal}>
          <use href={sprite + '#cross'}></use>
        </ButtonClose>
        {children}
      </DivContainer>
    </DivBackdrop>
  );
};

export default Modal;
