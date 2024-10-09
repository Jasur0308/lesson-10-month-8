import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  // State for sidebar visibility and size
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarLarge, setIsSidebarLarge] = useState(true); // New state for sidebar size

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarSize = () => {
    setIsSidebarLarge(!isSidebarLarge); // Toggle the sidebar size
  };

  return (
    <div className="flex">
      {/* Toggle Button for Sidebar Visibility */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition-colors duration-200 mb-4 md:hidden"
      >
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white min-h-screen p-6 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden md:block'} ${
          isSidebarLarge ? 'w-64' : 'w-20'
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

        {/* Button to Toggle Sidebar Size */}
        <button
          onClick={toggleSidebarSize}
          className="w-full mb-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          {isSidebarLarge ? 'Shrink Sidebar' : 'Expand Sidebar'}
        </button>

        <nav className="space-y-4">
          <Link
            href="/admin"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${
              pathname === '/admin' ? 'bg-gray-600' : ''
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${
              pathname === '/admin/products' ? 'bg-gray-600' : ''
            }`}
          >
            Products
          </Link>
          <Link
            href="/admin/users"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${
              pathname === '/admin/users' ? 'bg-gray-600' : ''
            }`}
          >
            Users
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;