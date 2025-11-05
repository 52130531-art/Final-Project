import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import NeedyRequests from './pages/NeedyRequests';
import DonorRequests from './pages/DonorRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/needy-requests" element={<NeedyRequests />} />
        <Route path="/donor-requests" element={<DonorRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
