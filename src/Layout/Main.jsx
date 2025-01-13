import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Nav/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Footer } from '../Components/Shared/Footer/Footer';

export const Main = () => {
  useEffect(() => {
    // Initialize AOS once here
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Optional: Ensures animations happen only once
    });
  }, []);
  return (
    <div className="min-w-2xl mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
