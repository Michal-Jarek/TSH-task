import { ProductItem } from 'ui';
import { ProductItemProps } from 'ui/porductItem/ProductItem.types';
import { useProducts } from 'hooks/useProducts/useProducts';

export const SignIn = () => {
  const {
    data: usersResponse,
    //  isFetching: isFetchingUsers,
    isFetched: areUsersFetched,
    //  hasNextPage: hasMoreUsers,
    //  fetchNextPage: loadMoreUsers,
    //  isFetchingNextPage,
  } = useProducts({ search: 'b', page: '2' });
  console.log(usersResponse);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await axiosClient.get('/products');
  //       console.log(data.data.items);
  //       setFetchedObjects(data.data.items);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className=" container h-screen">
      {areUsersFetched && (
        <ul className="mr-[-1.5rem] flex flex-wrap justify-center">
          {usersResponse?.items?.map((object: ProductItemProps) => {
            return (
              <li className=" mb-8 mr-6" key={object.id}>
                <ProductItem {...object} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
