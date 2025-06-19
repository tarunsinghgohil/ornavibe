
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg group"
    >
      <Link to={`/shop?category=${category.id}`} className="block">
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <img  
            alt={`${category.name} category`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           src="https://images.unsplash.com/photo-1682823544362-b751e260e33c" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
              <p className="text-white/80 text-sm mb-3">{category.description}</p>
              <motion.div 
                className="flex items-center text-accent text-sm font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Shop Now <ArrowRight className="h-4 w-4 ml-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
