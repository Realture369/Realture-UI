import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import PageNotFound from "./pages/PageNotFound";
import PropertyList from "./pages/PropertyList";
import PropertyType from "./pages/PropertyType";
import PropertyAgents from "./pages/PropertyAgents";
import BackToTopButton from "./components/shared/BackToTopButton";

const App = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/property-list" element={<PropertyList />} />
          <Route path="/property-type" element={<PropertyType />} />
          <Route path="/property-agent" element={<PropertyAgents />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
