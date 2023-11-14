export type GetProductResponse = {
  items: [
    {
      id: string;
      name: string;
      description: string;
      rating: number;
      image: string;
      promo: string;
      active: string;
    },
  ];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};
export type GetProductListArgs = {
  search?: string | null;
  limit?: string | null;
  page?: string | null;
  promo?: string | null;
  active?: string | null;
};
