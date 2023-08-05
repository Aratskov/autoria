import { BackdropModal } from 'components/BackdropModal/BackdropModal';
import {
  Form,
  Image,
  Title,
  Description,
  List,
  ListItem,
  CloseButton,
} from './ModalWindow.styled';
import { SecondMarkupButton } from 'components/SecondMarkupButton/SecondMarkupButton';
import { nanoid } from 'nanoid';

export const ModalWindow = ({ closeModal, dataCar }) => {
  const {
    img,
    model,
    make,
    year,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = dataCar;

  const infoDriver=rentalConditions.split('\n').concat(`Mileage:${mileage.toLocaleString('en-US')}`).concat(`Price: ${rentalPrice}`)

  return (
    <BackdropModal closeModal={closeModal}>
      <Form>
        <CloseButton onClick={closeModal}>&#10005;</CloseButton>
        <Image src={img} alt={model} />
        <Title>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>,{year}
        </Title>
        <Description>{description}</Description>
        <div style={{ marginTop: '24px', marginBottom: '24px' }}>
          <Description style={{ fontWeight: 500, marginBottom: '8px' }}>
            Accessories and functionalities:
          </Description>

          <List>
            {accessories.map((item, index) => (
              <ListItem key={index} index={index}>
                {item}
              </ListItem>
            ))}
          </List>

          <List>
            {functionalities.map((item, index) => (
              <ListItem key={index} index={index}>
                {item}
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ maxWidth: '460px', marginBottom: '30px' }}>
          <Description style={{ fontWeight: 500, marginBottom: '15px' }}>
            Rental Conditions:
          </Description>

          <p style={{ display: 'flex', gap: "36px", flexWrap: "wrap", margin:0}}>
  {infoDriver?.map((info) => (
    <span key={nanoid()}>{info}</span>
  ))}
</p>
        </div>
        <SecondMarkupButton title="Rental car" />
      </Form>
    </BackdropModal>
  );
};
