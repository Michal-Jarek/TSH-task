import { Fragment } from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { useAuth } from 'hooks/useAuth/useAuth';
import { useUsers } from 'hooks/useUsers/useUsers';
import { useNavigate } from 'hooks/useNavigate/useNavigate';

export const Home = () => {
  const { user, login, logout, isAuthenticated, isAuthenticating } = useAuth();

  const {
    data: usersResponse,
    isFetching: isFetchingUsers,
    isFetched: areUsersFetched,
    hasNextPage: hasMoreUsers,
    fetchNextPage: loadMoreUsers,
    isFetchingNextPage,
  } = useUsers();

  const navigate = useNavigate();

  return (
    <>
      <h2>Home</h2>

      <p>This is a starter project for TSH React application. Click on navigation links above to learn more.</p>

      <div className="mb-8">
        <p>User information &#129489;</p>
        <div className="mb-8 flex gap-4">
          <button
            disabled={isAuthenticating || isAuthenticated}
            onClick={() => login({ password: 'robBOB@2', username: 'robert@op.pl' })}
          >
            {isAuthenticating ? 'Logging in...' : 'Click to login'}
          </button>
          <button disabled={!isAuthenticated} onClick={logout}>
            Click to logout
          </button>
        </div>
        {isAuthenticating && <p>Loading data about you...</p>}
        {isAuthenticated && <code className="bg-[#BADA55] p-4">{JSON.stringify(user, null, 2)}</code>}
      </div>
      <div>
        <p>List of users &#129489;</p>
        <div className="mb-8">
          <ul>
            {areUsersFetched &&
              usersResponse?.pages?.map((page, index) => (
                <Fragment key={index}>
                  {page.users?.map((user) => (
                    <li key={user.id}>
                      <button
                        onClick={() => {
                          navigate(AppRoute.user, { params: { id: user.id } });
                        }}
                      >
                        User {user.id}
                      </button>
                    </li>
                  ))}
                </Fragment>
              ))}
          </ul>
          {isFetchingNextPage && <p>Loading more users...</p>}
          <button disabled={isFetchingNextPage || isFetchingUsers || !hasMoreUsers} onClick={() => loadMoreUsers()}>
            Load more
          </button>
        </div>
      </div>
    </>
  );
};
