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
    <div className="container my-5">
      <h2 className="mb-4">Properties for Sale</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {propertiesForSale.map((property, index) => (
          <div key={index} className="col">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-4">Properties for Rent</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {propertiesForRent.map((property, index) => (
          <div key={index} className="col">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      <ServicesList services={services} />
    </div>
  );
};

export default Home;
