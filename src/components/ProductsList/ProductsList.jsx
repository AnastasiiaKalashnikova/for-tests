import { useSelector } from 'react-redux';
import { selectVisibleProducts } from '../../redux/products/selector';
import { ProductItem } from '../ProductsItem/ProductsItem';
import filteredProducts from '../../products.json';

export const ProductsList = () => {
  // const dispatch = useDispatch();
  //const filteredProducts = useSelector(selectVisibleProducts);
  console.log(filteredProducts);
  return (
    <ul>
      {filteredProducts.map(product => {
        return (
          <ProductItem
            product={product}
            key={product._id.$oid}
            id={product._id.$oid}
          ></ProductItem>
        );

        //console.log(product.title);
        //потрібна структура бека
      })}
    </ul>
  );
};
