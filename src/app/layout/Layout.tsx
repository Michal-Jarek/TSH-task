import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

import sprite from '../../assets/icons/spriteIcons.svg';
interface FormData {
  searchTerm: string;
  isActive: boolean;
  isPromo: boolean;
}

export const Layout = () => {
  const { register, handleSubmit } = useForm<FormData>();
  //  const searchTerm = watch('searchTerm');

  const onSubmit = (data: FormData) => {
    console.log('Search Term:', data.searchTerm);
    console.log('Is Active:', data.isActive);
    console.log('Is Promo:', data.isPromo);
  };

  return (
    <>
      <div className=" w-full bg-white">
        <div className="container relative flex flex-wrap items-center py-12">
          <a href="https://tsh.io/pl/praca/" target="blank" className="text-[24px] leading-10">
            join.tsh.io
          </a>
          <nav className="">
            <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-wrap items-center space-x-4">
              <div className=" relative w-80   grow">
                <input
                  type="text"
                  placeholder="Search..."
                  {...register('searchTerm')}
                  className="mt-7 w-full border p-4"
                />
                <button type="submit" className="absolute right-5 top-10">
                  <svg className="h-6 w-6">
                    <use href={`${sprite}#search`}></use>
                  </svg>
                </button>
              </div>

              <div>
                <label>
                  <input type="checkbox" {...register('isActive')} className="mr-2" />
                  Active
                </label>
                <label>
                  <input type="checkbox" {...register('isPromo')} className="mr-2" />
                  Promo
                </label>
              </div>
            </form>
          </nav>
          <button className="absolute right-4 top-[60px]">LOGIN</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};
