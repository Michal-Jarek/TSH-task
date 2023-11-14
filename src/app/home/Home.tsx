import { useSearchParams } from 'react-router-dom';

import { Loader, ProductItem } from 'ui';
import { ProductItemProps } from 'ui/porductItem/ProductItem.types';
import { useProducts } from 'hooks/useProducts/useProducts';

export const Home = () => {
  const [params] = useSearchParams();

  const search = params.get('search');
  const active = params.get('active');
  const promo = params.get('promo');

  const {
    data: productsResponse,
    isFetching: isFetchingProducts,
    isFetched: areProductFetched,
  } = useProducts({ search, active, promo });

  return (
    <div className=" container mt-14">
      {isFetchingProducts && <Loader />}
      {areProductFetched && (
        <ul className=" flex flex-wrap justify-center md:justify-around lg:justify-between">
          {productsResponse?.items && productsResponse?.items?.length > 0
            ? productsResponse?.items?.map((object: ProductItemProps) => {
                return (
                  <li className=" mb-8 " key={object.id}>
                    <ProductItem {...object} />
                  </li>
                );
              })
            : 'TU MUSZĘ WSTAWIĆ KOMPONENT'}
        </ul>
      )}
    </div>
  );
};
