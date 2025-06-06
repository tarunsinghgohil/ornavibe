
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="testimonial-card bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img  
            alt={`${testimonial.name} avatar`}
            className="h-full w-full object-cover"
           src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
