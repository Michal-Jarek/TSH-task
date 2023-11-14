import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import {
  GetProductListArgs,
  GetProductResponse,
  // QUERY_TYPE_IMPORTS
} from './products.types';

export const productsQueries = {
  getProductsList:
    (client: AxiosInstance) =>
    async ({ page = '1', limit = '8', search = '' }: GetProductListArgs) => {
      const queryParams = stringify({ page, limit, search }, { addQueryPrefix: true });
      return (await client.get<GetProductResponse>(`/products${queryParams}`)).data;
    },
  // QUERY_FUNCTIONS_SETUP
};
