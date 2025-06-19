
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share, ShoppingBag, ArrowLeft, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reset state when product ID changes
    setIsLoading(true);
    setActiveImageIndex(0);
    setQuantity(1);
    
    // Fetch product data
    const fetchedProduct = getProductById(id);
    
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setRelatedProducts(getRelatedProducts(id, fetchedProduct.category));
      setIsLoading(false);
    } else {
      // Product not found, redirect to shop
      navigate('/shop');
    }
  }, [id, navigate]);
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const nextImage = () => {
    if (product) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (product) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    }
  };
  
  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-6xl px-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-1/4"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="h-10 bg-muted rounded w-full mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) return null;

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumbs */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link 
              to={`/shop?category=${product.category}`} 
              className="text-muted-foreground hover:text-foreground capitalize"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted/50 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <img  
                      alt={`${product.name} - View ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" />
                  </motion.div>
                </AnimatePresence>
                
                <button 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square w-16 rounded-md overflow-hidden ${
                      activeImageIndex === index ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img  
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1677693972403-db681288b5da" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium">Material:</span>
                <span>{product.material}</span>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {product.inStock ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm">Free shipping over $100</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm">2-year warranty</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm">30-day returns</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Tabs */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Product Description</h3>
              <p className="mb-4">{product.description}</p>
              <p className="mb-4">
                Each piece in our collection is meticulously crafted by our master jewelers using only the finest materials. 
                We take pride in our attention to detail and commitment to quality, ensuring that every item meets our exacting standards.
              </p>
              <p>
                Whether you're celebrating a special occasion or treating yourself to something beautiful, 
                this {product.name.toLowerCase()} is designed to be treasured for generations to come.
              </p>
            </TabsContent>
            
            <TabsContent value="details" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Product Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Material</span>
                      <span>{product.material}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Category</span>
                      <span className="capitalize">{product.category}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">SKU</span>
                      <span>LJ-{product.id.toString().padStart(4, '0')}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Care Instructions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Store in the provided jewelry box when not in use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Avoid contact with perfumes, lotions, and chemicals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clean gently with a soft cloth and specialized jewelry cleaner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Have your jewelry professionally cleaned once a year</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating.toFixed(1)} out of 5</span>
                </div>
                <p className="text-muted-foreground">Based on {product.reviews} reviews</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <span className="text-sm text-muted-foreground">2 weeks ago</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-2">Absolutely stunning piece! The craftsmanship is impeccable and it looks even better in person than in the photos. I've received so many compliments.</p>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Michael Chen</h4>
                    <span className="text-sm text-muted-foreground">1 month ago</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-2">Purchased this as an anniversary gift for my wife and she absolutely loves it. The quality is excellent and the packaging was beautiful. Would definitely recommend.</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Emily Rodriguez</h4>
                    <span className="text-sm text-muted-foreground">2 months ago</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-2">This piece exceeded all my expectations! The attention to detail is remarkable and it's exactly what I was looking for. Fast shipping and excellent customer service too.</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Back to Shop */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="outline" asChild>
          <Link to="/shop" className="inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
