import PropertyCard from '../components/PropertyCard';
import ServicesList from '../components/ServicesList';

const Home = () => {
  const propertiesForSale = Array(6).fill({
    title: 'Luxury Villa',
    price: '$2,000,000',
    location: 'Sydney, Australia',
    description: '4 Beds, 3 Baths, 3000 sq.ft, Pool & Garden',
    image: 'https://via.placeholder.com/300x200'
  });

  const propertiesForRent = Array(6).fill({
    title: 'Modern Apartment',
    price: '$2,500/month',
    location: 'Melbourne, Australia',
    description: '2 Beds, 2 Baths, 1500 sq.ft, City View',
    image: 'https://via.placeholder.com/300x200'
  });

  const services = [
    { title: 'Buy & Sell Properties' },
    { title: 'Rent & Lease Services' },
    { title: 'Property Management' },
    { title: 'Real Estate Investment' },
    { title: 'Home Loans' },
    { title: 'Construction & Renovation' },
    { title: 'Corporate Real Estate' },
    { title: 'Legal & Compliance' },
    { title: 'Short-Term Rentals' },
    { title: 'Market Trends' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Find Your Dream Property</h1>
        <p className="text-gray-600 text-xl">Explore premium properties for sale and rent across Australia</p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-blue-700 border-b-4 border-blue-300 inline-block">Properties for Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesForSale.map((property, index) => (
            <div key={`sale-${index}`} className="hover:scale-[1.02] transition-transform duration-300">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-green-700 border-b-4 border-green-300 inline-block">Properties for Rent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesForRent.map((property, index) => (
            <div key={`rent-${index}`} className="hover:scale-[1.02] transition-transform duration-300">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-10 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">What We Offer</h2>
        <p className="text-center text-gray-500 mb-8">Our services cover every aspect of real estate transactions and management.</p>
        <ServicesList services={services} />
      </section>
    </div>
  );
};

export default Home;
