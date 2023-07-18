import { Navigate } from 'react-router-dom';
import Main from './Main';
import Header from './Header';

function ProtectedRoute ({ loggedIn, userEmail, ...props }) {

  return (
    loggedIn ? 
    <>
      <Header dataUser={userEmail} />
      <Main 
        name='main'
        {...props}
      />
    </>
    : <Navigate to={'/sing-in'} replace />
  );
};

export default ProtectedRoute;
