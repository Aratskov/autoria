import { useEffect } from 'react';
import { getCatalogCar } from 'redux/operation';
import { useDispatch } from 'react-redux';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { PrioritySelect } from 'components/PrioritySelect/PrioritySelect';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogCar());
  }, [dispatch]);

  return <section>
      <PrioritySelect/>
      <CatalogList/>
  </section>;
};
