import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Button } from './ui/button';

import BookingForm from './BookingForm';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [showBooking, setShowBooking] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center text-muted-foreground">Your cart is empty.</div>
        ) : (
          <>
            <ul className="mb-4 divide-y">
              {cart.map(item => (
                <li key={item.id} className="flex items-center gap-4 py-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.currency}{item.price}.00</div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="w-full mb-2" onClick={clearCart}>Clear Cart</Button>
            <Button className="w-full mb-2" onClick={() => setShowBooking(true)}>Book Now</Button>
            <Button className="w-full" onClick={onClose}>Close</Button>
            {showBooking && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
                  <button className="absolute top-2 right-2 text-xl" onClick={() => setShowBooking(false)}>&times;</button>
                  {/* For simplicity, use the first item for booking form. You can extend this to handle all items. */}
                  <BookingForm experience={cart[0]} onSuccess={() => setShowBooking(false)} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
