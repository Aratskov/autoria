import { BackdropModal } from 'components/BackdropModal/BackdropModal';
import {
  Form,
  Image,
  Title,
  Description,
  List,
  ListItem,
} from './ModalWindow.styled';
import { SecondMarkupButton } from 'components/SecondMarkupButton/SecondMarkupButton';

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
  return (
    <BackdropModal closeModal={closeModal}>
      <Form>
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
              <div style={{maxWidth:"460px",marginBottom:"30px"}}>
                  <Description style={{ fontWeight: 500, marginBottom: '15px' }}>
            Rental Conditions:
          </Description>
          
          <span>{rentalConditions}</span>
          <span>Mileage:{mileage}</span>
          <span>Price: {rentalPrice}</span>
              </div>
              <SecondMarkupButton title="Rental car"/>
      </Form>
    </BackdropModal>
  );
};
