import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { GetProductListArgs, GetProductResponse } from './products.types';

export const productsQueries = {
  getProductsList:
    (client: AxiosInstance) =>
    async ({ page = '1', limit = '8', search, promo, active }: GetProductListArgs) => {
      const queryParams = stringify({ page, limit, search, promo, active }, { addQueryPrefix: true });
      return (await client.get<GetProductResponse>(`/products${queryParams}`)).data;
    },
};
