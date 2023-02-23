import React from 'react';
import Athenticated from './ProtectedRoute';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome back!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Athenticated(Profile);
