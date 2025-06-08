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
    <div className="container my-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
        <p className="text-gray-600 text-lg">Browse the best properties for sale and rent in Australia</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Properties for Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertiesForSale.map((property, index) => (
            <PropertyCard key={`sale-${index}`} property={property} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary">Properties for Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertiesForRent.map((property, index) => (
            <PropertyCard key={`rent-${index}`} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-medium mb-4 text-center">Our Services</h2>
        <ServicesList services={services} />
      </section>
    </div>
  );
};

export default Home;
