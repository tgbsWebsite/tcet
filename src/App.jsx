import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import AboutPage from './Pages/AboutPage';
import ProgrammesPage from './Pages/ProgrammesPage';
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
           <Route path="/programmespage" element={<ProgrammesPage/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
