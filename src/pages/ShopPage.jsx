
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const ShopPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    // Update selected category when URL parameter changes
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        filtered.sort((a, b) => (a.isFeatured === b.isFeatured) ? 0 : a.isFeatured ? -1 : 1);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };
  
  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our exquisite range of handcrafted jewelry pieces, designed to celebrate life's most precious moments.
          </p>
        </div>
      </section>
      
      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={toggleFilter}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex items-center">
                <label htmlFor="mobile-sort" className="text-sm mr-2">Sort by:</label>
                <select
                  id="mobile-sort"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="text-sm border rounded-md p-2 bg-background"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden fixed inset-0 z-50 bg-background p-4 overflow-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={toggleFilter}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          selectedCategory === 'all' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handleCategoryChange('all')}
                      >
                        All Jewelry
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`block w-full text-left px-3 py-2 rounded-md ${
                            selectedCategory === category.id 
                              ? 'bg-accent text-accent-foreground' 
                              : 'hover:bg-muted'
                          }`}
                          onClick={() => handleCategoryChange(category.id)}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          priceRange[0] === 0 && priceRange[1] === 3000 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handlePriceChange(0, 3000)}
                      >
                        All Prices
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          priceRange[0] === 0 && priceRange[1] === 500 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handlePriceChange(0, 500)}
                      >
                        Under $500
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          priceRange[0] === 500 && priceRange[1] === 1000 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handlePriceChange(500, 1000)}
                      >
                        $500 - $1,000
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          priceRange[0] === 1000 && priceRange[1] === 2000 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handlePriceChange(1000, 2000)}
                      >
                        $1,000 - $2,000
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          priceRange[0] === 2000 && priceRange[1] === 3000 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handlePriceChange(2000, 3000)}
                      >
                        $2,000 & Above
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 3000]);
                      setSortBy('featured');
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={toggleFilter}
                  >
                    Apply Filters
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === 'all' 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handleCategoryChange('all')}
                    >
                      All Jewelry
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          selectedCategory === category.id 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        priceRange[0] === 0 && priceRange[1] === 3000 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handlePriceChange(0, 3000)}
                    >
                      All Prices
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        priceRange[0] === 0 && priceRange[1] === 500 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handlePriceChange(0, 500)}
                    >
                      Under $500
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        priceRange[0] === 500 && priceRange[1] === 1000 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handlePriceChange(500, 1000)}
                    >
                      $500 - $1,000
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        priceRange[0] === 1000 && priceRange[1] === 2000 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handlePriceChange(1000, 2000)}
                    >
                      $1,000 - $2,000
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        priceRange[0] === 2000 && priceRange[1] === 3000 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => handlePriceChange(2000, 3000)}
                    >
                      $2,000 & Above
                    </button>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 3000]);
                    setSortBy('featured');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="flex-grow">
              {/* Desktop Sort */}
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                
                <div className="flex items-center">
                  <label htmlFor="desktop-sort" className="text-sm mr-2">Sort by:</label>
                  <select
                    id="desktop-sort"
                    value={sortBy}
                    onChange={handleSortChange}
                    className="text-sm border rounded-md p-2 bg-background"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
              
              {/* Active Filters */}
              {(selectedCategory !== 'all' || priceRange[0] !== 0 || priceRange[1] !== 3000) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategory !== 'all' && (
                    <div className="inline-flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                      Category: {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                      <button 
                        className="ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setSelectedCategory('all')}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {(priceRange[0] !== 0 || priceRange[1] !== 3000) && (
                    <div className="inline-flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                      <button 
                        className="ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setPriceRange([0, 3000])}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  <button 
                    className="inline-flex items-center text-sm text-accent hover:text-accent/80"
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 3000]);
                    }}
                  >
                    Clear all
                  </button>
                </div>
              )}
              
              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 3000]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
