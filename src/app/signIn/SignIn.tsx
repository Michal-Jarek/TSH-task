import { ProductItem } from 'ui';

import { fetchObjects } from './fetchObjects';

export const SignIn = () => {
  return (
    <div className=" container h-screen">
      <ul className="mr-[-1.5rem] flex flex-wrap justify-center">
        {fetchObjects.map((object) => (
          <li className=" mb-8 mr-6" key={object.id}>
            <ProductItem {...object} />
          </li>
        ))}
      </ul>
    </div>
  );
};
