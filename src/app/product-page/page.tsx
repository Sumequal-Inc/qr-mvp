'use client';

import { useRouter } from 'next/navigation';

const products = [
  {
    title: "Professional Loan",
    description: "Unlock the potential of your business with our tailored professional loans designed to fuel growth and drive success.",
    icon: "💼",
  },
  {
    title: "Personal Loan",
    description: "Unlock your financial potential with our tailored personal loans, paving the way to your dreams with ease and confidence.",
    icon: "👤",
  },
  {
    title: "Business Loan",
    description: "Empower your business dreams with tailored financial solutions - seize growth opportunities with our flexible business loans.",
    icon: "🏢",
  },
  {
    title: "Home Loan",
    description: "Turn the key to your future with our personalized home loan options, designed to open the door to your ideal living space.",
    icon: "🏡",
  },
  {
    title: "Doctor Loan",
    description: "Unlock your medical aspirations with our specialized Doctor Loan, tailored to support your professional journey.",
    icon: "🩺",
  },
  {
    title: "Finance Literacy Programme",
    description: "Transform your financial know-how with our Finance Literacy Programme—empowering you to navigate personal finance confidently.",
    icon: "📖",
  },
];

export default function ProductPage() {
  const router = useRouter();

  const handleReadMore = (product: string) => {
    router.push(`/product-page/loan-details?product=${encodeURIComponent(product)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 p-10">
     
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-md">
        Choose Your Loan Type
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {/* Icon with Background */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded-full text-4xl shadow-lg">
                {product.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
            </div>

          
            <p className="text-gray-700 mb-4">{product.description}</p>

           
            <button 
              onClick={() => handleReadMore(product.title)}
              className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
