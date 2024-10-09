import Link from 'next/link';

const ProductCard = ({ product }) => {

  const truncateTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 20)}...` : title;
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4 cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{truncateTitle(product.title)}</h3>
        <p className="text-gray-700">${product.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;