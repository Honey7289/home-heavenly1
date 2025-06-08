// src/pages/Buy.jsx
import React, { useState, useEffect } from 'react';
import PropertyList from '../components/listings/PropertyList';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulated fetch from backend/API
    const fetchProperties = async () => {
      try {
        // Simulate loading
        await new Promise((res) => setTimeout(res, 1000));

        const fetchedData = [
          {
            title: '3BHK Flat in Pune',
            location: 'Koregaon Park',
            price: '₹95,00,000',
            image: '/images/flat1.jpg',
          },
          {
            title: 'Farmhouse in Lonavala',
            location: 'Tiger Point',
            price: '₹2,50,00,000',
            image: '/images/farmhouse.jpg',
          },
          {
            title: 'Commercial Shop in Mumbai',
            location: 'Andheri East',
            price: '₹1,75,00,000',
            image: '/images/shop.jpg',
          },
        ];

        setProperties(fetchedData);
      } catch (err) {
        setError('Failed to load properties. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">🏠 Buy Properties</h2>
        <p className="text-muted">Find plots, flats, shops, farmhouses and more!</p>
      </div>

      {loading && (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && <PropertyList properties={properties} />}
    </Container>
  );
};

export default Buy;
