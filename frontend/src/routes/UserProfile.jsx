import React from 'react';

const UserProfile = ({ username, onLogout }) => {
  return (
    <div className="user-profile">
      <p>Welcome, {username}!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
