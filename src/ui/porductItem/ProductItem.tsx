import { ProductItemProps } from './ProductItem.types';
import { ProductButton, RatingStars } from './components';

export const ProductItem = (productItemData: ProductItemProps) => {
  const { name, description, rating, image: imageSRC, promo, active, id } = productItemData;

  console.log(`isPromo: ${promo} isActive: ${active}, id: ${id}`);

  return (
    <div className=" h-[400px] max-w-mobile overflow-hidden rounded-lg bg-white md:max-w-tablet">
      <ul className="flex h-full flex-col">
        <li className="h-[170px] object-cover">
          <img className="h-full w-full object-cover" src={imageSRC} alt={name} />
        </li>
        <li className=" h-auto grow px-4 pb-6 pt-4">
          <ul className="flex h-full flex-col">
            <li className="mb-2">
              <h2 className=" text-[18px] font-semibold text-secondaryTxt">{name}</h2>
            </li>
            <li>{description}</li>
            <li className="mb-4 mt-auto ">
              <RatingStars rating={rating} id={id} />
            </li>
            <li className="w-full">
              <ProductButton isActive={active} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
