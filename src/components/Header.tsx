import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ShoppingCart } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user ? JSON.parse(user) : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.reload();
  };

  return (
    <header className="w-full bg-white border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">UnTrip</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Removed Online Experiences, Become a Curator, and Blog from navigation as requested */}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Link to="/untrip-plus">
            <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              {t('join_untrip_plus')}
              <span className="ml-1 text-xs bg-white/20 px-1 rounded">New</span>
            </Button>
          </Link>
          

          <button className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>
            )}
          </button>
          <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-sm hover:text-primary transition-colors"
            >
              {t('english')}
            </button>
          </div>
          
          {loggedInUser ? (
            <>
              <span className="text-green-600 font-semibold">Signed in</span>
              <Button variant="ghost" className="text-primary ml-2" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <a href="/login">
              <Button variant="ghost" className="text-primary">
                {t('login')}
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;