import { useDispatch, useSelector } from 'react-redux';

import { addLike, removeLike } from 'redux/operation';
import { MarkupButton } from 'components/MarkupButton/MarkupButton';
import { selectLikedCars } from 'redux/select';

import { Image, SecondText, Title, ToggleLike,Text } from './MarkupCardCar.styled';

export const MarkupCardCar = ({ car }) => {
  const dispatch = useDispatch();
  const likedCars = useSelector(selectLikedCars);

  const {
    id,
    address,
    img,
    model,
    make,
    year,
    rentalPrice,
    rentalCompany,
    type,
  } = car;

  const isLiked = likedCars.some(car => car.id === id);
  const dataAdress = address.split(' ').slice(-2);
  const addressFull = dataAdress.map(item => item.replace(/,$/, ''));

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(removeLike(car));
    } else {
      dispatch(addLike(car));
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <ToggleLike onClick={handleLikeClick}>
        <svg
          width="22"
          height="22"
          fill={isLiked ? '#3470FF' : 'transparent'}
          stroke={isLiked ? '#3470FF' : '#FFF'}
        >
          <path
            strokeWidth="2"
            transform="scale(0.7)"
            d="M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963 0-1.917 0.19-2.807 0.559s-1.698 0.909-2.379 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.558-1.844 0.558-2.807-0.19-1.917-0.558-2.807c-0.369-0.89-0.909-1.699-1.591-2.38z"
          ></path>
        </svg>
      </ToggleLike>
      <Image src={img} alt={model} />
      <div>
        <Title>
          <Text>{make} <span style={{ color: '#3470FF' }}>{model}</span>,{year}</Text>
          <span>{rentalPrice}</span>
        </Title>

        <div style={{ marginBottom: 28 }}>
          <SecondText>
            {addressFull[0]} | {addressFull[1]} | {rentalCompany}
          </SecondText>
          <SecondText>
            {type} | {model} | {id} 
          </SecondText>
        </div>
        <MarkupButton title="Learn more" dataCar={car} />
      </div>
    </div>
  );
};
