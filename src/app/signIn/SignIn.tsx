import { ProductItem } from 'ui';

import { fetchObjects } from './fetchObjects';

export const SignIn = () => {
  return (
    <div className=" h-screen bg-bgMain">
      <ProductItem {...fetchObjects[0]} />
    </div>
  );
};
