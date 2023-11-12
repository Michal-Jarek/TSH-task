import { ProductItemProps } from './ProductItem.types';

export const ProductItem = (productItemData: ProductItemProps) => {
  const { name, description, rating, image: imageSRC, promo, active, id } = productItemData;
  return (
    <div className=" w-20">
      <p>{name}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <p>
        <img src={imageSRC} alt="A littlebit of hell" />
      </p>
      <p>{promo}</p>
      <p>{active}</p>
      <p>{id}</p>
    </div>
  );
};
