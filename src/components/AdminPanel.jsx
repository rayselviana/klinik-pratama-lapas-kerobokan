import React, { useState } from 'react';

const AdminPanel = ({ onAddAdmin }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddAdmin = () => {
    onAddAdmin(newUsername, newPassword);
    setNewUsername('');
    setNewPassword('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleAddAdmin}>Add Admin</button>
    </div>
  );
};

export default AdminPanel;