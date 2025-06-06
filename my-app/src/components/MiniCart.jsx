
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const MiniCart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, toggleCart } = useCart();
  
  const cartTotal = getCartTotal();
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const cartVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={toggleCart}
    >
      <motion.div 
        className="absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-xl flex flex-col"
        variants={cartVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Your Cart
          </h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-grow overflow-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Looks like you haven't added any jewelry to your cart yet.
              </p>
              <Button onClick={toggleCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start border-b border-border pb-4"
                >
                  <div className="h-20 w-20 rounded-md bg-secondary flex-shrink-0 mr-4">
                    <img  alt={item.name} className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.material}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={toggleCart}>
                Continue Shopping
              </Button>
              <Button asChild>
                <Link to="/cart" onClick={toggleCart}>
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MiniCart;
