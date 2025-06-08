import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log('Contact form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow rounded-4 p-4">
        <h3 className="mb-4 text-center text-primary">Contact Us</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {submitted && <Alert variant="success">Thank you! We'll get back to you soon.</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="rounded-3"
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="primary" size="lg" className="rounded-pill">
              Send Message
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactUs;
