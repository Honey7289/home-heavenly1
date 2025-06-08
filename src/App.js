// src/App.js
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import AuthForm from './AuthForm';
import Home from './home';
import './App.css';

import { AuthProvider, useAuth } from './context/AuthContext';
import { FirebaseAuthProvider } from './context/FirebaseAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import {
  UserDashboard,
  AdminDashboard,
  BuilderDashboard,
  CompanyDashboard,
  AgentDashboard,
  UserManagement,
  PropertiesManagement,
  ServiceManagement,
  PaymentsManagement,
  PaymentsOverview,
  PendingSubscriptions,
  PaymentHistory,
  AppointmentsManagement,
  LegalComplianceManagement,
  UserSearchAnalytics,
  UserSupport,
} from './components/Dashboard';

import {
  BookValuation,
  OffPlanDeals,
  ForeclosedSales,
  AuctionSupport,
  SubmitInquiry,
  TransactionLegalHelp,
  TenantScreening,
  LeaseAgreement,
  CoLivingSolutions,
  ShortTermRentals,
  StudentHousing,
  RentCollection,
  MaintenanceRepairs,
  LegalDisputeResolution,
  HomeInsurancePlans,
  InvestmentPlanning,
  LandPlotInvestment,
  FractionalOwnership,
  MarketTrends,
  HomeLoanAssistance,
  LoanRefinancing,
  RealEstateTaxPlanning,
  CustomHomeConstruction,
  InteriorDesigning,
  SmartHomeInstallations,
  LandscapingSolutions,
  OfficeSpaceLeasing,
  IndustrialRetailSolutions,
  CorporateRealEstate,
  TitleVerification,
  RERACompliance,
  DisputeResolution,
  StampDutySupport,
} from './components/Services';

import {
  SelectAdPurpose,
  PostPropertyPage,
  RentPropertyPage,
  PreLaunchProjectPage,
  MortgagePropertyPage,
  CommercialLeasePage,
  PGHostelPage,
  BuilderProjectPage,
  AuctionPage,
  OtherPage,
} from './components/PostProperty';

import { SignUp, Login } from './components/Auth';
import { Buy, Sale, Rent, ContactUs } from './pages';
import { SearchBar, SearchResults } from './components/Home';

const MainContent = () => {
  const location = useLocation();
  if (location.pathname !== '/') return null;
  return (
    <div className="container mt-5 animate-fadeIn">
      <div className="text-center mb-5">
        <SearchBar />
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
            <h4 className="text-primary mb-3">Properties for Sale</h4>
            <p>Explore the latest listings for houses, apartments, and commercial properties.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
            <h4 className="text-success mb-3">Properties for Rent</h4>
            <p>Find your next rental home, fully verified and ready to move in.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4 p-4 h-100">
            <h4 className="text-info mb-3">Our Services</h4>
            <p>We offer end-to-end legal, financial, and construction services for your property needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFound = () => (
  <div className="text-center mt-5">
    <h2 className="text-danger">404 - Page Not Found</h2>
    <p className="lead">The page you are looking for does not exist.</p>
    <a className="btn btn-outline-primary mt-3" href="/">Go Back Home</a>
  </div>
);

const RoleBasedDashboard = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  switch (user.role) {
    case 'admin': return <Navigate to="/admin-dashboard" replace />;
    case 'builder': return <Navigate to="/builder-dashboard" replace />;
    case 'agent': return <Navigate to="/agent-dashboard" replace />;
    case 'user':
    case 'normal': return <Navigate to="/user-dashboard" replace />;
    default: return <Navigate to="/" replace />;
  }
};

function App() {
  return (
    <AuthProvider>
      <FirebaseAuthProvider>
        <Navbar />
        <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
          <Route path="/" element={<><Home /><MainContent /></>} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/signup" element={<AuthForm mode="signup" />} />

          <Route path="/dashboard" element={<RoleBasedDashboard />} />

          <Route path="/user-dashboard/*" element={<ProtectedRoute allowedRoles={["user", "normal", "builder", "agent"]}><UserDashboard /></ProtectedRoute>} />
          <Route path="/builder-dashboard/*" element={<ProtectedRoute allowedRoles={["builder"]}><BuilderDashboard /></ProtectedRoute>} />
          <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/agent-dashboard/*" element={<ProtectedRoute allowedRoles={["agent"]}><AgentDashboard /></ProtectedRoute>} />
          <Route path="/company-dashboard/*" element={<ProtectedRoute allowedRoles={["company"]}><CompanyDashboard /></ProtectedRoute>} />

          {/* Other routes same as original... */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </FirebaseAuthProvider>
    </AuthProvider>
  );
}

export default App;
