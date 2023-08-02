import { useState } from 'react';
import { Button } from './MarkupButton.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const MarkupButton = ({ title,dataCar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Button onClick={handleButtonClick}>{title}</Button>
      {isModalOpen && <ModalWindow closeModal={() => setIsModalOpen(false)} dataCar={ dataCar} />}
    </>
  );
};
