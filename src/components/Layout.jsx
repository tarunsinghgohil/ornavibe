
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MiniCart from '@/components/MiniCart';
import { useCart } from '@/contexts/CartContext';
import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const { isCartOpen } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <AnimatePresence>
        {isCartOpen && <MiniCart />}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
