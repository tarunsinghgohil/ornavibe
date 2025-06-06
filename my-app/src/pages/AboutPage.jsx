
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover the passion and craftsmanship behind Lumina Jewels.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">A Legacy of Excellence</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 1995 by master jeweler Elizabeth Lumina, our company began as a small atelier in New York's Diamond District. With a passion for exceptional craftsmanship and an eye for timeless design, Elizabeth's creations quickly gained recognition for their distinctive character and impeccable quality.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the decades, Lumina Jewels has grown into a respected name in fine jewelry, while staying true to our founding principles: using only the finest materials, supporting ethical sourcing practices, and creating pieces that celebrate life's most precious moments.
              </p>
              <p className="text-muted-foreground">
                Today, our team of skilled artisans continues this tradition of excellence, combining time-honored techniques with contemporary innovation to create jewelry that will be treasured for generations to come.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img  
                  alt="Jewelry artisan crafting a piece" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1694868026937-57fa4d525934" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-[200px] hidden md:block">
                <p className="text-sm font-medium mb-1 gold-gradient">Since 1995</p>
                <p className="text-xs text-muted-foreground">Crafting moments that last forever</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Lumina Jewels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Craftsmanship</h3>
              <p className="text-muted-foreground">
                We believe in creating jewelry of the highest quality, with meticulous attention to detail and a commitment to excellence in every piece we craft.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Sourcing</h3>
              <p className="text-muted-foreground">
                We are committed to responsible practices, ensuring our materials are ethically sourced and our processes respect both people and the planet.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Timeless Design</h3>
              <p className="text-muted-foreground">
                We create pieces that transcend trends, combining classic elegance with contemporary sensibility for jewelry that will be cherished for generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Crafting Process</h2>
            <p className="text-muted-foreground">
              From concept to creation, discover how we bring our jewelry to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-muted-foreground">
                Our designers sketch initial concepts, drawing inspiration from art, nature, and architecture to create unique and beautiful designs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Material Selection</h3>
              <p className="text-muted-foreground">
                We carefully source the finest materials, from ethically mined gemstones to recycled precious metals, ensuring quality and responsibility.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
              <p className="text-muted-foreground">
                Our master jewelers bring designs to life using both traditional techniques and modern technology, ensuring precision and beauty.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-6 mx-auto">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Each piece undergoes rigorous inspection to ensure it meets our exacting standards before being beautifully packaged for its new owner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The talented individuals behind our exquisite jewelry creations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-[4/5]">
                <img  
                  alt="Elizabeth Lumina - Founder & Creative Director" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Elizabeth Lumina</h3>
                <p className="text-accent mb-4">Founder & Creative Director</p><p className="text-muted-foreground">
                  With over 30 years of experience in fine jewelry design, Elizabeth brings her visionary approach and meticulous attention to detail to every collection.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-[4/5]">
                <img  
                  alt="Marcus Chen - Master Jeweler" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1577727601237-8d885940df5c" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Marcus Chen</h3>
                <p className="text-accent mb-4">Master Jeweler</p>
                <p className="text-muted-foreground">
                  With a background in traditional techniques from across the globe, Marcus brings unparalleled craftsmanship and innovation to our atelier.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-[4/5]">
                <img  
                  alt="Sophia Rivera - Design Director" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1684478164011-67d9885a7dab" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sophia Rivera</h3>
                <p className="text-accent mb-4">Design Director</p>
                <p className="text-muted-foreground">
                  A graduate of the prestigious Gemological Institute, Sophia combines her technical expertise with a contemporary design sensibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                    Experience Our Craftsmanship
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 max-w-md">
                    Explore our collection and discover the perfect piece to celebrate your special moments.
                  </p>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/shop" className="inline-flex items-center">
                      Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img  
                  alt="Elegant jewelry display in Lumina Jewels showroom" 
                  className="absolute inset-0 w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1674526283171-541615a5dd13" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
