import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-blue-800">Total Products</h2>
            <p className="text-2xl font-bold">150</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-800">Total Users</h2>
            <p className="text-2xl font-bold">320</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-yellow-800">Sales This Month</h2>
            <p className="text-2xl font-bold">$5,000</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;