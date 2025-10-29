import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ProgrammesPage from "./Pages/ProgrammesPage";
import ChairmanMessage from "./Pages/About Us/ChairmanMessage";
import CeoMessage from "./Pages/About Us/CeoMessage";
import Principal from "./Pages/About Us/Principal";
import VicePrincipal from "./Pages/About Us/VicePrincipal";
import DeanMessage from "./Pages/About Us/DeanMessage";
import Dean from "./Pages/About Us/Dean";
import Deans from "./Pages/About Us/Deans";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/chairman" element={<ChairmanMessage />} />
          <Route path="/about/ceo" element={<CeoMessage />} />
          <Route path="/about/principal" element={<Principal />} />
          <Route path="/about/vice-principal" element={<VicePrincipal />} />
          <Route path="/about/dean-message" element={<DeanMessage />} />
          <Route path="/about/dean" element={<Dean />} />
          <Route path="/about/dean-academic" element={<Deans />} />

          <Route path="/programmespage" element={<ProgrammesPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
