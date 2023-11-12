import { ProductItem } from 'ui';

export const SignIn = () => {
  const fetchedObject = {
    name: 'Licensed Steel Salad',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    rating: 0,
    image: 'https://picsum.photos/500/500',
    promo: true,
    active: false,
    id: '00969c48-cb18-4486-91d9-80f739a2462d',
  };
  return (
    <>
      <h2>SignIN</h2>

      <ProductItem {...fetchedObject} />
    </>
  );
};
