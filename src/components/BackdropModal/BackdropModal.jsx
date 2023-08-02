import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './BackdropModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const BackdropModal = ({ children, closeModal }) => {
  const handleBackdropClick = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleBackdropClick);
    };
  }, [handleBackdropClick]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
};
