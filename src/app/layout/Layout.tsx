import { useForm, Controller } from 'react-hook-form';
import { Outlet, useSearchParams } from 'react-router-dom';
import qs from 'qs';

import sprite from '../../assets/icons/spriteIcons.svg';

interface FormData {
  search: string;
  promo: boolean;
  active: boolean;
}

export const Layout = () => {
  const { register, handleSubmit, control } = useForm<FormData>();
  const [searchParams, setSearchParams] = useSearchParams();

  const active = searchParams.get('active') === 'true' ?? false;
  const promo = searchParams.get('promo') === 'true' ?? false;

  const onSubmit = (data: FormData) => {
    setSearchParams(qs.stringify(data));
  };

  return (
    <div className="h-screen">
      <div className=" w-full bg-white">
        <div className="container relative flex flex-wrap items-center  py-12 sm:flex-nowrap">
          <a href="https://tsh.io/pl/praca/" target="blank" className="text-[24px] leading-10 outline-none">
            join.tsh.io
          </a>
          <nav className=" w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="items-left relative  flex flex-col sm:ml-5 sm:pt-5 md:ml-24 xl:mt-[-28px] xl:flex-row xl:flex-wrap xl:pt-0"
            >
              <div className=" relative max-w-[320px] sm:w-96 sm:max-w-none ">
                <input
                  type="text"
                  placeholder="Search..."
                  {...register('search')}
                  className="mt-7 w-full border p-4 hover:outline-btnNorm focus:outline-btnNorm"
                />
                <button
                  type="submit"
                  className="absolute right-5 top-10 outline-none hover:fill-btnNorm focus:fill-btnNorm"
                >
                  <svg className="h-6 w-6">
                    <use href={`${sprite}#search`} />
                  </svg>
                </button>
              </div>

              <div className="ml-0 mt-6 flex xl:ml-6">
                <label htmlFor="active" className="relative mr-8 flex cursor-pointer items-center">
                  <Controller
                    name="active"
                    control={control}
                    defaultValue={active}
                    render={({ field }) => (
                      <>
                        <input {...field} type="checkbox" className="hidden" value={field.value.toString()} />
                        <div
                          role="checkbox"
                          tabIndex={0}
                          aria-checked={active}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              field.onChange(!field.value);
                            }
                          }}
                          onClick={() => field.onChange(!field.value)}
                          className={`mr-2 h-6 w-6 rounded-sm border border-gray-300 hover:border-btnNorm focus:outline-btnNorm active:border-btnNorm ${
                            field.value ? 'border-btnNorm' : ''
                          }`}
                        >
                          {field.value && (
                            <svg className="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform fill-btnNorm">
                              <use href={`${sprite}#check`}></use>
                            </svg>
                          )}
                        </div>
                      </>
                    )}
                  />
                  <span className="block">Active</span>
                </label>
                <label htmlFor="promo" className="relative mr-8 flex cursor-pointer items-center">
                  <Controller
                    name="promo"
                    control={control}
                    defaultValue={promo}
                    render={({ field }) => (
                      <>
                        <input {...field} type="checkbox" className="hidden" value={field.value.toString()} />
                        <div
                          role="checkbox"
                          tabIndex={0}
                          aria-checked={promo}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              field.onChange(!field.value);
                            }
                          }}
                          onClick={() => field.onChange(!field.value)}
                          className={`mr-2 h-6 w-6 rounded-sm border border-gray-300 hover:border-btnNorm focus:outline-btnNorm active:border-btnNorm ${
                            field.value ? 'border-btnNorm' : ''
                          }`}
                        >
                          {field.value && (
                            <svg className="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform fill-btnNorm">
                              <use href={`${sprite}#check`} />
                            </svg>
                          )}
                        </div>
                      </>
                    )}
                  />
                  <span className="block">Promo</span>
                </label>
              </div>
            </form>
          </nav>
          <button className=" absolute right-4 top-[52px] h-9 w-20 rounded border border-btnNorm text-btnNorm outline-none hover:border-btnHov hover:text-btnHov focus:border-btnHov focus:text-btnHov sm:top-[100px] xl:top-14">
            LOGIN
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
