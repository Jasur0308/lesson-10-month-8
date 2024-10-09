import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition-colors duration-200 mb-4 md:hidden"
      >
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      <aside className={`w-64 bg-gray-900 text-white min-h-screen p-6 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link
            href="/admin"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${pathname === '/admin' ? 'bg-gray-600' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${pathname === '/admin/products' ? 'bg-gray-600' : ''}`}
          >
            Products
          </Link>
          <Link
            href="/admin/users"
            className={`block p-3 rounded transition-colors duration-200 hover:bg-gray-700 ${pathname === '/admin/users' ? 'bg-gray-600' : ''}`}
          >
            Users
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;