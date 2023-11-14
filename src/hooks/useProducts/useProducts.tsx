import { UseQueryOptions } from '@tanstack/react-query';

import { GetProductListArgs, GetProductResponse } from 'api/actions/products/products.types';
import { useQuery } from '../useQuery/useQuery';

export const useProducts = (args: GetProductListArgs, options?: UseQueryOptions<GetProductResponse>) => {
  return useQuery('getProductsList', args, options);
};
