import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const history = useNavigate ();

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Check if the new password and verify password match
    if (newPassword !== verifyPassword) {
      alert('New password and verify password do not match');
      return;
    }

    // Call the API to update the password with the current password and new password
    fetch('/api/users/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        // Clear the form
        setCurrentPassword('');
        setNewPassword('');
        setVerifyPassword('');

        alert('Password changed successfully');
      })
      .catch((error) => {
        alert(`Error changing password: ${error.message}`);
      });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();

    // Call the API to delete the user's account with the current password
    fetch('/api/users/deleteAccount', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        currentPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        // Clear the local storage and redirect to the login page
        localStorage.removeItem('token');
        history.push('/login');
      })
      .catch((error) => {
        alert(`Error deleting account: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleChangePassword}>
        <h2>Change password</h2>
        <label>
          Current password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </label>
        <label>
          New password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Verify password:
          <input
            type="password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            required
          />
        </label>
        {newPassword !== verifyPassword && (
          <p style={{ color: 'red' }}>New password and verify password do not match</p>
        )}
        <button type="submit">Change password</button>
      </form>
      <form onSubmit={handleDeleteAccount}>
        <h2>Delete account</h2>
        <p>Are you sure you want to delete your account?</p>
        <label>
        Current password:
        <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
        />
        </label>
        <button type="submit">Delete account</button>
    </form>
    </div>
    );
};

export default Settings;
