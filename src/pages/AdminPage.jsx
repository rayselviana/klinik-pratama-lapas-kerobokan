import React, { useState } from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage = () => {
  const [admins, setAdmins] = useState([]);

  const handleAddAdmin = (username, password) => {
    setAdmins([...admins, { username, password }]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminPanel onAddAdmin={handleAddAdmin} />
      <ul>
        {admins.map((admin, index) => (
          <li key={index}>{admin.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;