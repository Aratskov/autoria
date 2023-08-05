import { useSelector } from 'react-redux';
import { selectFilterCar } from 'redux/select';
import { nanoid } from 'nanoid';

import { MarkupCardCar } from 'components/MarkupCardCar/MarkupCardCar';
import { Item, List, ButtonLoad } from './CatalogList.styled';
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';

export const CatalogList = ({variant}) => {
  const catalogCar = useSelector(selectFilterCar);

  const [itemsToShow, setItemsToShow] = useState(8);

  const handleLoadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 8);
  };

  return (
    <section>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variant'}>
      <List variant="true">
        {catalogCar?.slice(0, itemsToShow).map(car => (
          <Item key={nanoid()}>
            <MarkupCardCar car={car} />
          </Item>
        ))}
      </List>
      </StyleSheetManager>
      {itemsToShow <= catalogCar?.length && (
        <ButtonLoad onClick={handleLoadMore}>Load more</ButtonLoad>
      )}
    </section>
  );
};
