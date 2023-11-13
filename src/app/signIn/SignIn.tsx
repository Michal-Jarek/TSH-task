import { useEffect, useState } from 'react';

import { ProductItem } from 'ui';
import axiosClient from 'api/axios';
import { ProductItemProps } from 'ui/porductItem/ProductItem.types';

export const SignIn = () => {
  const [fetchedObjects, setFetchedObjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosClient.get('/products');
        console.log(data.data.items);
        setFetchedObjects(data.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" container h-screen">
      {fetchedObjects.length != 0 && (
        <ul className="mr-[-1.5rem] flex flex-wrap justify-center">
          {fetchedObjects.map((object: ProductItemProps) => {
            console.log(object);
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
