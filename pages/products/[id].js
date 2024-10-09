import { useRouter } from 'next/router';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  // Show a loading message while the page is being generated
  if (router.isFallback) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg w-64 h-auto" // Adjust the width here
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-center">{product.title}</h1>
          <p className="text-lg mb-4 text-center">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mb-6 text-center">${product.price}</p>
          <div className="flex flex-col items-center">
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
            <button
              onClick={() => router.back()}
              className="mt-2 w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch all products for static generation
export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Create paths for each product based on their ID
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }, // Convert ID to string
  }));

  return { paths, fallback: true }; // Enable fallback for new products
}

// Fetch individual product data for static generation
export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
}

export default ProductDetail;