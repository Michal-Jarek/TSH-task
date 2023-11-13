// import { AuthForm } from 'ui/authForm/AuthForm';

import { useAuth } from 'hooks';

export const LogIn = () => {
  const { user, login, logout, isAuthenticated, isAuthenticating } = useAuth();

  return (
    <>
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
      <div></div>
    </>
  );
};

// <AuthForm />;
