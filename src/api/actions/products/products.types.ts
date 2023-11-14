export type GetProductResponse = {
  items: [
    {
      id: string;
      name: string;
      description: string;
      rating: number;
      image: string;
      promo: true;
      active: true;
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
  search?: string;
  limit?: string;
  page?: string;
  promo?: boolean;
  active?: boolean;
};

// API_ACTION_TYPES
