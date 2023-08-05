import { useSelector } from 'react-redux';
import { selectLikedCars } from 'redux/select';
import { MarkupCardCar } from 'components/MarkupCardCar/MarkupCardCar';
import { Item, List } from '../CatalogList/CatalogList.styled';
import { SecondTitle } from './FavoritesList.styled';

export const FavoritesList = () => {
  const likedCars = useSelector(selectLikedCars);
  const lengthArr = likedCars.length;

  return (
    <section>
      {lengthArr === 0 ? (
        <SecondTitle>You have not added any favorite cars yet</SecondTitle>
      ) : (
        <List>
          {likedCars?.map(car => (
            <Item key={car.id}>
              <MarkupCardCar car={car} />
            </Item>
          ))}
        </List>
      )}
    </section>
  );
};
