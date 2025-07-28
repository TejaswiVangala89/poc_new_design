import './App.css';
import CreateOrUpdateCustomer from "./components/CreateOrUpdateCustomer";
import Home from "./components/Home";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function CustomerWrapper() {
  const { id } = useParams();
  return <CreateOrUpdateCustomer id={id} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CreateOrUpdateCustomer />} />
        <Route path="/customer/:id" element={<CustomerWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
