import sprite from '../../../../assets/icons/spriteIcons.svg';

import { RatingStarsProps } from './RatingStars.types';

export const RatingStars = ({ rating: numberOfStars, id }: RatingStarsProps): JSX.Element => {
  const svgJSX: JSX.Element[] = [];

  for (let index = 0; index < 5; index++) {
    if (index < numberOfStars)
      svgJSX.push(
        <svg key={`${id}#s${index}`} className="mr-2 h-4 w-4">
          <use href={`${sprite}#star`} />
        </svg>,
      );
    else
      svgJSX.push(
        <svg key={`${id}#sb${index}`} className="mr-2 h-4 w-4">
          <use href={`${sprite}#star_border`} />
        </svg>,
      );
  }

  return <div className="flex fill-additional">{svgJSX.map((svg: JSX.Element) => svg)}</div>;
};
