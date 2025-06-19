
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const cartTotal = getCartTotal();
  const shippingCost = cartTotal > 100 ? 0 : 10;
  const taxRate = 0.08; // 8% tax
  const taxAmount = cartTotal * taxRate;
  const orderTotal = cartTotal + shippingCost + taxAmount;
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase! You will receive a confirmation email shortly.",
        duration: 5000,
      });
      
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          <p className="text-muted-foreground max-w-2xl">
            Review your items and proceed to checkout.
          </p>
        </div>
      </section>
      
      {/* Cart Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-muted mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven't added any jewelry to your cart yet. Explore our collection to find the perfect piece.
              </p>
              <Button asChild size="lg">
                <Link to="/shop">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
                      <Button 
                        variant="ghost" 
                        className="text-muted-foreground hover:text-destructive"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                  
                  <ul className="divide-y">
                    {cart.map((item) => (
                      <motion.li 
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="h-24 w-24 bg-muted rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                            <img  
                              alt={item.name}
                              className="h-full w-full object-cover"
                             src="https://images.unsplash.com/photo-1617038220319-276d3cfab638" />
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <div>
                                <h3 className="font-medium text-lg mb-1">{item.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{item.material}</p>
                              </div>
                              <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                              <div className="flex items-center mb-4 sm:mb-0">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-10 text-center">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-muted-foreground hover:text-destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="p-6 border-t">
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <Link to="/shop" className="inline-flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <span>${shippingCost.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    
                    {shippingCost > 0 && (
                      <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                        Add ${(100 - cartTotal).toFixed(2)} more to qualify for free shipping
                      </div>
                    )}
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${orderTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-6" 
                      size="lg"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          Checkout
                        </span>
                      )}
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground mt-4">
                      <p>We accept:</p>
                      <div className="flex justify-center space-x-2 mt-2">
                        <div className="h-8 w-12 bg-muted rounded"></div>
                        <div className="h-8 w-12 bg-muted rounded"></div>
                        <div className="h-8 w-12 bg-muted rounded"></div>
                        <div className="h-8 w-12 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;
