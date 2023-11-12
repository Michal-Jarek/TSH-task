import { ProductButtonProps } from './ProductButton.types';

export const ProductButton = ({ isActive, onClick }: ProductButtonProps): JSX.Element => {
  const btnCommonClass = 'w-full rounded-[4px] w-full border-0 py-3 text-white';
  if (isActive)
    return (
      <button
        className={`${btnCommonClass} bg-btnNorm transition-all  duration-300 ease-in-out hover:bg-btnHov`}
        onClick={onClick}
      >
        Show details
      </button>
    );
  return (
    <button className={`${btnCommonClass} bg-btnDisabled`} disabled>
      Unavailable
    </button>
  );
};
