import { ProductItem } from 'ui';

import { fetchObjects } from './fetchObjects';

export const SignIn = () => {
  return (
    <div className="  h-screen max-w-[1224px]">
      <ul className="flex flex-wrap">
        {fetchObjects.map((object) => (
          <li className=" gap-4" key={object.id}>
            <ProductItem {...object} />
          </li>
        ))}
      </ul>
    </div>
  );
};
