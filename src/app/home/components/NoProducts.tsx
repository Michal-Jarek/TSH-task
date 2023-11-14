import sprite from '../../../assets/icons/spriteIcons.svg';

export const NoProducts = (): JSX.Element => {
  return (
    <div className="mx-auto h-80 w-full rounded bg-white md:max-w-[600px]">
      <ul className="flex h-full flex-col items-center justify-center">
        <li>
          <svg className="h-12 w-8 ">
            <use href={`${sprite}#bag`} />
          </svg>
        </li>
        <li className="text-secondary mt-5 text-[18px]">Ooops… It&rsquo;s empty here</li>
        <li className="mt-2 text-primaryTxt">There are no products on the list</li>
      </ul>
    </div>
  );
};
