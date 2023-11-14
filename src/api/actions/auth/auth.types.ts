export type LoginMutationArguments = {
  username: string;
  password: string;
};

export type LoginMutationResponse = {
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  access_token: string;
  tokenType?: string;
  expiresIn: number;
  refreshToken?: string;
};

export type GetMeQueryResponse = {
  firstName: string;
  lastName: string;
  username: string;
};

export type User = {
  id: string;
  name: string;
};

export type GetUsersResponse = {
  users: User[];
  nextPage: number | null;
};

export type GetUsersInfiniteArgs = {
  pageParam?: string;
  count?: string;
};

export type GetUsersListArgs = {
  page?: string;
};

// API_ACTION_TYPES
