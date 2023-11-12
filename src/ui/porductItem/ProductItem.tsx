import { useState } from 'react';

import { ProductItemProps } from './ProductItem.types';
import { ProductButton, ProductModal, RatingStars } from './components';

export const ProductItem = (productItemData: ProductItemProps) => {
  const { name, description, rating, image: imageSRC, promo, active, id } = productItemData;
  const [showDetails, setShowDetails] = useState(false);

  const imgBeforeStyle = 'before:bg-unavailable/75 before:absolute before:z-10 before:h-full before:w-full';

  return (
    <div className=" h-[400px] max-w-mobile overflow-hidden rounded-lg bg-white md:max-w-tablet">
      <ul className="relative flex h-full flex-col">
        <li className="relative h-[170px] bg-unavailable object-cover">
          <div className={`${!active && imgBeforeStyle} h-full w-full`}>
            <img className="  h-full w-full object-cover" src={imageSRC} alt={name} />
          </div>
        </li>
        {promo && <li className="absolute top-4 z-20 bg-additional px-4 py-1 text-white">Promo</li>}
        <li className=" h-auto grow px-4 pb-6 pt-4">
          <ul className="flex h-full flex-col">
            <li className="mb-2">
              <h2 className=" text-[18px] font-semibold text-secondaryTxt">{name}</h2>
            </li>
            <li>
              <p>{description}</p>
            </li>
            <li className="mb-4 mt-auto ">
              <RatingStars rating={rating} id={id} />
            </li>
            <li className="w-full">
              <ProductButton isActive={active} onClick={() => setShowDetails(!showDetails)} />
            </li>
          </ul>
        </li>
      </ul>
      <ProductModal
        name={name}
        description={description}
        image={imageSRC}
        promo={promo}
        onClick={() => setShowDetails(!showDetails)}
        visible={showDetails}
      />
    </div>
  );
};
