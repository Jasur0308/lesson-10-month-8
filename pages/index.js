import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210710/original/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-picture-image_1048684.jpg')" }}>
        <div className="bg-white rounded-lg shadow-xl p-10 max-w-lg text-center bg-opacity-90 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to My Store</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore our wide range of products. Click below to view all products.
          </p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}