import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Loader, ProductItem } from 'ui';
import { ProductItemProps } from 'ui/porductItem/ProductItem.types';
import { useProducts } from 'hooks/useProducts/useProducts';

import { NoProducts } from './components/NoProducts';

export const Home = () => {
  const [params] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const search = params.get('search');
  const active = params.get('active');
  const promo = params.get('promo');
  const page = currentPage;
  const {
    data: productsResponse,
    isFetching: isFetchingProducts,
    isFetched: areProductsFetched,
  } = useProducts({ search, active, promo, page });

  const totalPages = productsResponse?.meta.totalPages || 0;

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <div className=" container mt-14">
      {isFetchingProducts && <Loader />}
      {areProductsFetched && (
        <ul className=" flex flex-wrap justify-center md:justify-around lg:justify-between">
          {productsResponse?.items && productsResponse?.items?.length > 0 ? (
            productsResponse.items.map((object: ProductItemProps) => {
              return (
                <li className=" mb-8 " key={object.id}>
                  <ProductItem {...object} />
                </li>
              );
            })
          ) : (
            <NoProducts />
          )}
        </ul>
      )}
      {productsResponse?.items && productsResponse?.items?.length > 0 && (
        <div className=" flex justify-center text-[14px]">
          <button
            onClick={() => setCurrentPage(1)}
            className={`${currentPage === 1 && ' pointer-events-none text-primaryTxt'} `}
          >
            First
          </button>
          <ReactPaginate
            className="flex gap-2"
            previousLabel=""
            nextLabel=""
            breakLabel={'...'}
            pageCount={totalPages}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`${currentPage === totalPages && ' pointer-events-none text-primaryTxt'} `}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
};
