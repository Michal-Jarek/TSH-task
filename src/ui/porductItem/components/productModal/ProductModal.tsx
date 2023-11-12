import sprite from '../../../../assets/icons/spriteIcons.svg';

import { ProductModalProps } from './ProductModal.type';

export const ProductModal = ({
  name,
  description,
  image: imageSRC,
  promo,
  onClick,
  visible,
}: ProductModalProps): JSX.Element => {
  return (
    <div
      className={`${
        !visible ? 'opacity-0' : 'fixed opacity-100'
      } bottom-0 left-0 right-0 top-0 z-30 flex w-full bg-bgModal/90 text-black`}
    >
      <div className=" relative m-auto  h-[530px] w-96 overflow-hidden rounded-lg bg-white">
        <ul>
          <li className="mb-6 h-[354px]">
            <img className="  h-full w-full object-cover" src={imageSRC} alt={name} />
          </li>
          {promo && <li className="absolute top-4 z-20 bg-additional px-4 py-1 text-white">Promo</li>}
          <li className="mx-8 mb-2">
            <h2 className=" text-[24px] font-semibold leading-10 text-secondaryTxt">{name}</h2>
          </li>
          <li className="mx-8 text-[18px] leading-6 text-primaryTxt">
            <p>{description}</p>
          </li>
        </ul>
        <button className=" absolute right-6 top-6" onClick={onClick}>
          <svg className="h-6 w-6">
            <use href={`${sprite}#close`} />
          </svg>
        </button>
      </div>
    </div>
  );
};
