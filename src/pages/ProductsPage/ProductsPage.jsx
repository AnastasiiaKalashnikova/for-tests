import { useDispatch, useSelector } from 'react-redux';
//import { TitlePage } from '../../components/TitlePage/TitlePage';
import { useEffect } from 'react';
import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';

export default function ProductsPage() {
  //const isLoading = useSelector(selectIsLoading);
  //const error = useSelector(selectError);
  //const dispatch = useDispatch();
  //useEffect(() => {
  //  dispatch(fetchContacts());
  //}, [dispatch]);

  //    <>
  //   <ProductsFilter />
  //      <TitlePage title="Products" />
  //   {isLoading && !error && <h1>зробити лодер</h1>}
  //   {error && <p>Sorry! {error}. Try again!</p>}
  //   <ProductsList />
  // </>
  return (
    <>
      <ProductsFilters />
      <ProductsList />
    </>
  );
}
